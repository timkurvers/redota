/* eslint-disable key-spacing */

import FieldPath from '../parser/FieldPath.js';
import FieldState from '../parser/FieldState.js';

class Entity {
  constructor(index, serial, cls) {
    this.index = index;
    this.serial = serial;
    this.class = cls;
    this.active = true;
    this.state = new FieldState();
  }

  get snapshot() {
    const struct = {};
    // TODO: Mutation of field path argument is oddly implemented here
    const fps = this.class.getFieldPaths(new FieldPath(), this.state);
    for (const fp of fps) {
      struct[this.class.getNameForFieldPath(fp)] = this.state.get(fp);
    }
    return struct;
  }

  get(name) {
    // TODO: Caching
    const fp = new FieldPath();
    if (!this.class.getFieldPathForName(fp, name)) {
      return null;
    }
    return this.state.get(fp);
  }
}

const EntityEvent = {
  NONE:    0x00,
  CREATED: 0x01,
  UPDATED: 0x02,
  DELETED: 0x04,
  ENTERED: 0x08,
  LEFT:    0x10,
};

export default Entity;
export { EntityEvent };
