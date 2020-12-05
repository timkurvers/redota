/* eslint-disable no-multi-spaces */

import EventEmitter from 'events';

import snappy from 'snappyjs';

import Field, { FieldModel } from './Field.js';
import FieldType from './FieldType.js';
import Reader from './Reader.js';
import Serializer from './Serializer.js';
import StringTable, { StringTableEntry } from './StringTable.js';
import {
  Class,
  Entity, EntityEvent,
  GameEvent, GameEventField, GameEventType,
  SERIAL_BITS,
} from './model/index.js';
import { IndexedCollection } from '../utils/index.js';
import {
  CSVCMsg_FlattenedSerializer,
  EDemoCommands,
  commandToTypeMapping,
  packetToTypeMapping,
  priorityForType,
} from './defs.js';
import { fieldPatches } from './FieldPatch.js';

const MAGIC_SOURCE_1 = 'PBUFDEM\0'; // eslint-disable-line
const MAGIC_SOURCE_2 = 'PBDEMS2\0';

// Based on Dotabuff's Manta parser
// See: https://github.com/dotabuff/manta/blob/master/parser.go
class Parser extends Reader {
  constructor(buffer) {
    super(buffer);

    this.buildNumber = null;
    this.classes = new IndexedCollection('id', { byName: 'name' });
    this.classBaselines = {};
    this.classIDSize = null;
    this.entityFullPacketCount = 0;
    this.entities = new IndexedCollection('index');
    this.gameEventTypes = new IndexedCollection('id', { byName: 'name' });
    this.serializers = new IndexedCollection('name');
    this.stringTables = new IndexedCollection('name', { byIndex: 'index' });

    this.emitter = new EventEmitter();
    this.tick = -1;
    this.tickInterval = null;
    this.parsing = false;
    this.synced = false;

    this.on('msg:CDemoPacket', this.onCDemoPacket.bind(this));
    this.on('msg:CDemoSignonPacket', this.onCDemoPacket.bind(this));
    this.on('msg:CDemoFullPacket', this.onCDemoFullPacket.bind(this));
    this.on('msg:CDemoSyncTick', this.onCDemoSyncTick.bind(this));
    this.on('msg:CSVCMsg_ClearAllStringTables', this.onCSVCMsg_ClearAllStringTables.bind(this));
    this.on('msg:CSVCMsg_CreateStringTable', this.onCSVCMsg_CreateStringTable.bind(this));
    this.on('msg:CSVCMsg_UpdateStringTable', this.onCSVCMsg_UpdateStringTable.bind(this));
    this.on('msg:CSVCMsg_ServerInfo', this.onCSVCMsg_ServerInfo.bind(this));
    this.on('msg:CMsgSource1LegacyGameEventList', this.onCMsgSource1LegacyGameEventList.bind(this));
    this.on('msg:CMsgSource1LegacyGameEvent', this.onCMsgSource1LegacyGameEvent.bind(this));
    this.on('msg:CDemoClassInfo', this.onCDemoClassInfo.bind(this));
    this.on('msg:CDemoSendTables', this.onCDemoSendTables.bind(this));
    this.on('msg:CSVCMsg_PacketEntities', this.onCSVCMsg_PacketEntities.bind(this));
    this.on('msg:CDemoStop', this.stop.bind(this));

    // Ensure this is a Dota 2 replay file
    const magic = this.readStringN(MAGIC_SOURCE_2.length);
    if (magic !== MAGIC_SOURCE_2) {
      throw new Error(`unexpected magic: ${magic}; expected: ${MAGIC_SOURCE_2}`);
    }

    // Skip currently unused integers
    this.skip(8);
  }

  get lastTick() {
    const { pos } = this;
    this.pos = MAGIC_SOURCE_2.length;
    // Jump to the position of CDemoFileInfo message in replay
    this.pos = this.readUint32LE();
    this.readVarUint32();
    const lastTick = this.readVarUint32();
    this.pos = pos;
    return lastTick;
  }

  on(...args) {
    this.emitter.on(...args);
  }

  off(...args) {
    this.emitter.off(...args);
  }

  start() {
    this.parsing = true;
    while (!this.synced && this.parsing) {
      this.step();
    }
  }

  step(ticks = 1) {
    this.seek(this.tick + ticks);
  }

  seek(target) {
    while (this.tick < target && this.parsing) {
      const cmd = this.readVarUint32();
      const tick = this.readVarUint32();
      const size = this.readVarUint32();
      let data = this.readBytes(size);

      const type = cmd & ~EDemoCommands.DEM_IsCompressed;
      const compressed = (cmd & EDemoCommands.DEM_IsCompressed) === EDemoCommands.DEM_IsCompressed;
      if (compressed) {
        data = snappy.uncompress(data);
      }

      const lookup = commandToTypeMapping[type];
      if (!lookup) {
        throw new Error(`no type to handle demo command: ${type}`);
      }
      const [Type, as] = lookup;

      this.tick = tick;

      const event = `msg:${as}`;
      const numListeners = this.emitter.listenerCount(event);
      if (!numListeners) {
        this.emitter.emit('msg:skip', as, tick);
        continue;
      }

      const struct = Type.decode(data);
      this.emitter.emit(event, struct, tick);
      this.emitter.emit('tick', tick);
    }
  }

  play() {
    this.seek(Infinity);
  }

  stop() {
    this.parsing = false;
  }

  onCDemoPacket(msg) {
    const reader = new Reader(msg.data);

    const pending = [];
    while (!reader.eof) {
      const type = reader.readUBitVar();
      const size = reader.readVarUint32();
      const data = reader.readBytes(size);
      pending.push({ type, size, data });
    }

    // TODO: Investigate whether the lookup / bailout can be done earlier
    // TODO: Also investigate whether retrieving listener count is expensive

    if (pending.length > 1) {
      pending.sort(prioritizePendingMessages); // eslint-disable-line
    }

    for (const message of pending) {
      const lookup = packetToTypeMapping[message.type];
      if (!lookup) {
        continue;
      }

      const [Type, as] = lookup;

      const event = `msg:${as}`;
      const numListeners = this.emitter.listenerCount(event);
      if (!numListeners) {
        this.emitter.emit('msg:skip', as);
        continue;
      }

      const struct = Type.decode(message.data);
      this.emitter.emit(event, struct);
    }
  }

  onCDemoFullPacket({ stringTable, packet }) {
    if (stringTable) {
      // TODO: Handle string tables
    }
    if (packet) {
      this.onCDemoPacket(packet);
    }
  }

  onCDemoSyncTick() {
    this.synced = true;
  }

  onCSVCMsg_ClearAllStringTables() {
    this.stringTables.clear();
  }

  onCSVCMsg_CreateStringTable(msg) {
    const {
      name, userDataFixedSize, userDataSize, userDataSizeBits, flags, numEntries,
    } = msg;

    const table = new StringTable(
      name,
      userDataFixedSize,
      userDataSize,
      userDataSizeBits,
      flags,
    );
    table.index = this.stringTables.size;
    this.stringTables.add(table);

    let buffer = msg.stringData;

    if (msg.dataCompressed) {
      const reader = new Reader(buffer);
      const magic = reader.readStringN(8);
      if (magic === 'LZSS') {
        throw new Error('LZSS string tables in old replays not yet supported');
      } else {
        buffer = snappy.uncompress(buffer);
      }
    }

    StringTableEntry.decode(table, buffer, numEntries);

    if (table.name === 'instancebaseline') {
      this.updateInstanceBaseline();
    }
  }

  onCSVCMsg_UpdateStringTable(msg) {
    const {
      stringData: buffer, numChangedEntries, tableId,
    } = msg;

    const table = this.stringTables.byIndex.get(tableId);
    if (!table) {
      throw new Error(`could not find string table: ${tableId}`);
    }

    StringTableEntry.decode(table, buffer, numChangedEntries);

    if (table.name === 'instancebaseline') {
      this.updateInstanceBaseline();
    }
  }

  onCSVCMsg_ServerInfo(msg) {
    this.classIDSize = Reader.calcBitsNeededFor(msg.maxClasses);
    this.tickInterval = msg.tickInterval;

    const match = msg.gameDir.match(/dota_v(\d+)/);
    if (match) {
      this.buildNumber = +match[1];
    } else {
      const warning = new Error(`could not retrieve build number from: ${msg.gameDir}`);
      this.emitter.emit('warn', warning);
    }
  }

  onCMsgSource1LegacyGameEventList(msg) {
    for (const { eventid, name, keys } of msg.descriptors) {
      const type = new GameEventType(eventid, name);
      for (const key of keys) {
        type.fields.push(
          new GameEventField(type.fields.length, key.name, key.type),
        );
      }
      this.gameEventTypes.add(type);
    }
  }

  onCMsgSource1LegacyGameEvent(msg) {
    const type = this.gameEventTypes.get(msg.eventid);
    if (!type) {
      throw new Error(`unknown event: ${msg.eventid}`);
    }

    const event = new GameEvent(type, msg);
    this.emitter.emit('event', event);
    this.emitter.emit(`event:${type.name}`, event);
  }

  onCDemoClassInfo(msg) {
    for (const { classId, networkName } of msg.classes) {
      const cls = new Class(
        classId,
        networkName,
        this.serializers.get(networkName),
      );
      this.classes.add(cls);
    }

    this.updateInstanceBaseline();
  }

  onCDemoSendTables(msg) {
    const reader = new Reader(msg.data);
    const buffer = reader.readBytes(reader.readVarUint32());

    const struct = CSVCMsg_FlattenedSerializer.decode(buffer);

    const patches = fieldPatches.filter((patch) => (
      patch.appliesFor(this.buildNumber)
    ));

    const fields = {};
    const fieldTypes = {};

    for (const { fieldsIndex, serializerVersion, serializerNameSym } of struct.serializers) {
      const name = struct.symbols[serializerNameSym];
      const serializer = new Serializer(name, serializerVersion);

      for (const index of fieldsIndex) {
        let field = fields[index];
        if (!field) {
          field = Field.for(struct.symbols, struct.fields[index]);

          if (this.buildNumber <= 990) {
            field.parentName = serializer.name;
          }

          const { varType } = field;
          let fieldType = fieldTypes[varType];
          if (!fieldType) {
            fieldType = FieldType.for(varType);
            fieldTypes[varType] = fieldType;
          }
          field.fieldType = fieldType;

          if (field.serializerName) {
            field.serializer = this.serializers.get(field.serializerName);
          }

          for (const patch of patches) {
            patch.apply(field);
          }

          if (field.serializer) {
            if (field.isPointerType) {
              field.model = FieldModel.FIXED_TABLE;
            } else {
              field.model = FieldModel.VARIABLE_TABLE;
            }
          } else if (field.fieldType.count > 0 && field.fieldType.baseType !== 'char') {
            field.model = FieldModel.FIXED_ARRAY;
          } else if (field.fieldType.baseType === 'CUtlVector') {
            field.model = FieldModel.VARIABLE_ARRAY;
          } else {
            field.model = FieldModel.SIMPLE;
          }

          fields[index] = field;
        }
        serializer.fields.push(field);
      }

      this.serializers.add(serializer);

      const cls = this.classes.byName[serializer.name];
      if (cls) {
        cls.serializer = serializer;
      }
    }
  }

  onCSVCMsg_PacketEntities(msg) {
    const reader = new Reader(msg.entityData);
    const changeset = [];

    let index = -1;
    let cmd;
    let classID;
    let serial;
    let entity;
    let event;

    if (!msg.isDelta) {
      if (this.entityFullPacketCount > 0) {
        return;
      }
      this.entityFullPacketCount++;
    }

    for (let i = msg.updatedEntries; i > 0; --i) {
      index += reader.readUBitVar() + 1;
      event = EntityEvent.NONE;
      cmd = reader.readBitInt(2);
      if ((cmd & 0x01) === 0) {
        if ((cmd & 0x02) !== 0) {
          classID = reader.readBitInt(this.classIDSize);
          serial = reader.readBitInt(SERIAL_BITS);
          reader.readVarUint32();

          const cls = this.classes.get(classID);
          if (!cls) {
            throw new Error(`unable to find new class: ${classID}`);
          }

          const baseline = this.classBaselines[classID];
          if (!baseline) {
            throw new Error(`unable to find new baseline: ${classID}`);
          }

          entity = new Entity(index, serial, cls);
          this.entities.add(entity);
          new Reader(baseline).readFieldsInto(entity.state, cls.serializer);
          reader.readFieldsInto(entity.state, cls.serializer);
          event = EntityEvent.CREATED | EntityEvent.ENTERED;
        } else {
          entity = this.entities.get(index);
          if (!entity) {
            throw new Error(`unable to find existing entity: ${index}`);
          }

          event = EntityEvent.UPDATED;
          if (!entity.active) {
            entity.active = true;
            event |= EntityEvent.ENTERED;
          }
          reader.readFieldsInto(entity.state, entity.class.serializer);
        }
      } else {
        entity = this.entities.get(index);
        if (!entity) {
          throw new Error(`unable to find existing entity: ${index}`);
        }

        if (!entity.active) {
          throw new Error(`entity ${entity.class.name} ordered to leave, already inactive`);
        }

        event = EntityEvent.LEFT;
        if ((cmd & 0x02) !== 0) {
          event |= EntityEvent.DELETED;
          this.entities.delete(entity);
        }
      }
      // TODO: Should changed field path values be exposed in this changeset?
      changeset.push({ entity, event });
    }
    this.emitter.emit('entities', changeset);
  }

  updateInstanceBaseline() {
    const table = this.stringTables.get('instancebaseline');
    if (!table) {
      return;
    }

    for (const entry of table.entries) {
      const classID = +entry.key;
      this.classBaselines[classID] = entry.data;
    }
  }

  static async validate(file) {
    const { length } = MAGIC_SOURCE_2;
    if (file.size < length) {
      return false;
    }
    const magic = await file.slice(0, MAGIC_SOURCE_2.length).text();
    return magic === MAGIC_SOURCE_2;
  }
}

const prioritizePendingMessages = (a, b) => {
  const ap = priorityForType(a);
  const bp = priorityForType(b);
  return ap - bp;
};

export default Parser;
