/* eslint-disable max-classes-per-file */

const ACCESSORS_BY_TYPE = {
  1: 'valString',
  2: 'valFloat',
  3: 'valLong',
  4: 'valShort',
  5: 'valByte',
  6: 'valBool',
  7: 'valUint64',
};

class GameEvent {
  constructor(type, packet) {
    this.type = type;
    this.packet = packet;
    this.data = {};
    for (const [index, field] of Object.entries(this.type.fields)) {
      const accessor = ACCESSORS_BY_TYPE[field.type];
      this.data[field.name] = this.packet.keys[index][accessor];
    }
  }
}

class GameEventField {
  constructor(index, name, type) {
    this.index = +index;
    this.name = name;
    this.type = type;
  }
}

class GameEventType {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.fields = [];
  }
}

export default GameEvent;
export { GameEventField, GameEventType };
