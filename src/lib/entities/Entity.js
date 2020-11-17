/* eslint-disable key-spacing */

import EntityState from './EntityState.js';

class Entity {
  constructor(index, serial, cls) {
    this.index = index;
    this.serial = serial;
    this.class = cls;
    this.active = true;
    this.state = new EntityState();
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
