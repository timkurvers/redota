/* eslint-disable key-spacing */

class Entity {
  constructor(...args) {
    console.log(args);
  }
}

const EntityOp = {
  NONE:    0x00,
  CREATED: 0x01,
  UPDATED: 0x02,
  DELETED: 0x04,
  ENTERED: 0x08,
  LEFT:    0x10,
};

export default Entity;
export { EntityOp };
