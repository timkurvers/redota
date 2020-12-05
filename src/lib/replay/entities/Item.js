import { computed, makeObservable, observable } from 'mobx';

import { itemsByName } from '../../constants.js';

class Item {
  constructor(replay, handle) {
    this.replay = replay;
    this.handle = handle;

    this.refname = null;
    this.charges = null;
    this.cooldown = null;

    makeObservable(this, {
      handle: observable,
      refname: observable,
      charges: observable,
      cooldown: observable,

      name: computed,
    });
  }

  get name() {
    return itemsByName[this.refname].dname;
  }
}

export default Item;
