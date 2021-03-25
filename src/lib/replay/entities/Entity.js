import { computed, makeObservable } from 'mobx';

class Entity {
  constructor(replay, entity, internalName = null) {
    this.replay = replay;
    this.entity = entity;
    this.internalName = internalName;

    makeObservable(this, {
      refname: computed,
    });
  }

  get class() {
    return this.entity.class.name;
  }

  get handle() {
    return this.entity.handle;
  }

  get refname() {
    return this.internalName;
  }
}

export default Entity;
