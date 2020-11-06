import EventEmitter from 'events';

import snappy from 'snappyjs';

import Class from '../entities/Class.js';
import GameEvent, { GameEventField, GameEventType } from '../entities/GameEvent.js';

import Reader from './Reader.js';
import {
  EDemoCommands, commandToTypeMapping, packetToTypeMapping,
} from './defs.js';

const MAGIC_SOURCE_1 = 'PBUFDEM\0'; // eslint-disable-line
const MAGIC_SOURCE_2 = 'PBDEMS2\0';

// Based on Dotabuff's Manta parser
// See: https://github.com/dotabuff/manta/blob/master/parser.go
class Parser extends Reader {
  constructor(buffer) {
    super(Buffer.from(buffer));

    this.emitter = new EventEmitter();

    this.classesById = {};
    this.classesByName = {};

    this.entityFullPacketCount = 0;
    this.entities = [];

    this.gameEventsByName = {};
    this.gameEventsById = {};

    this.parsing = false;

    // Ensure this is a Dota 2 replay file
    const magic = this.readString(8, 'utf8');
    if (magic !== MAGIC_SOURCE_2) {
      throw new Error(`unexpected magic: ${magic}; expected: ${MAGIC_SOURCE_2}`);
    }

    // Skip currently unused integers
    this.skip(8);
  }

  on(...args) {
    this.emitter.on(...args);
  }

  start() {
    this.parsing = true;

    this.on('packet:CDemoPacket', this.onCDemoPacket.bind(this));
    this.on('packet:CDemoSignonPacket', this.onCDemoPacket.bind(this));
    this.on('packet:CDemoFullPacket', this.onCDemoFullPacket.bind(this));
    this.on('packet:CSVCMsg_CreateStringTable', this.onCSVCMsg_CreateStringTable.bind(this));
    this.on('packet:CSVCMsg_UpdateStringTable', this.onCSVCMsg_UpdateStringTable.bind(this));
    this.on('packet:CSVCMsg_ServerInfo', this.onCSVCMsg_ServerInfo.bind(this));
    this.on('packet:CMsgSource1LegacyGameEventList', this.onCMsgSource1LegacyGameEventList.bind(this));
    this.on('packet:CMsgSource1LegacyGameEvent', this.onCMsgSource1LegacyGameEvent.bind(this));
    this.on('packet:CDemoClassInfo', this.onCDemoClassInfo.bind(this));
    this.on('packet:CDemoSendTables', this.onCDemoSendTables.bind(this));
    this.on('packet:CSVCMsg_PacketEntities', this.onCSVCMsg_PacketEntities.bind(this));
    this.on('packet:CDemoStop', this.stop.bind(this));

    while (this.parsing) {
      const cmd = this.readVarUint32();
      if (cmd === EDemoCommands.DEM_Stop) {
        this.parsing = false;
      }

      this.readVarUint32();
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
      const [Type, as = Type.name] = lookup;

      const event = `packet:${as}`;
      const numListeners = this.emitter.listenerCount(event);
      if (!numListeners) {
        this.emitter.emit('packet:skip', as);
        continue;
      }

      const struct = Type.decode(data);
      this.emitter.emit(event, struct);
    }
  }

  stop() {
    this.parsing = false;
  }

  onCDemoPacket(packet) {
    const reader = new Reader(packet.data);

    const pending = [];
    while (!reader.eof) {
      const type = reader.readUBitVar();
      const size = reader.readVarUint32();
      const data = reader.readBytes(size);
      pending.push({ type, size, data });
    }

    // TODO: Sort pending

    for (const message of pending) {
      const lookup = packetToTypeMapping[message.type];
      if (!lookup) {
        continue;
      }

      const [Type, as = Type.name] = lookup;

      const event = `packet:${as}`;
      const numListeners = this.emitter.listenerCount(event);
      if (!numListeners) {
        this.emitter.emit('packet:skip', as);
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

  onCSVCMsg_CreateStringTable(_packet) { /* eslint-disable-line class-methods-use-this */
  }

  onCSVCMsg_UpdateStringTable(_packet) { /* eslint-disable-line class-methods-use-this */
  }

  onCSVCMsg_ServerInfo(_packet) { /* eslint-disable-line class-methods-use-this */
  }

  onCMsgSource1LegacyGameEventList(packet) {
    for (const { eventid, name, keys } of packet.descriptors) {
      const type = new GameEventType(eventid, name);
      for (const key of keys) {
        type.fields.push(
          new GameEventField(type.fields.length, key.name, key.type),
        );
      }
      this.gameEventsByName[name] = type;
      this.gameEventsById[eventid] = type;
    }
  }

  onCMsgSource1LegacyGameEvent(packet) {
    const type = this.gameEventsById[packet.eventid];
    if (!type) {
      throw new Error(`unknown event: ${packet.eventid}`);
    }

    const event = new GameEvent(type, packet);
    this.emitter.emit('event', event);
    this.emitter.emit(`event:${type.name}`, event);
  }

  onCDemoClassInfo(packet) {
    for (const { classId, networkName } of packet.classes) {
      const cls = new Class(classId, networkName);
      this.classesById[cls.id] = cls;
      this.classesByName[cls.name] = cls;
    }

    // TODO: Update instance base line
  }

  onCDemoSendTables(_packet) { /* eslint-disable-line class-methods-use-this */
  }

  onCSVCMsg_PacketEntities(_packet) { /* eslint-disable-line class-methods-use-this */
  }
}

export default Parser;
