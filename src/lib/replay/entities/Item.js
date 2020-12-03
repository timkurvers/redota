import { computed, makeObservable, observable } from 'mobx';

import { itemsByName } from '../../constants.js';

class Item {
  constructor(replay, eid) {
    this.replay = replay;
    this.eid = eid;

    this.handle = null;
    this.refname = null;

    makeObservable(this, {
      handle: observable,
      refname: observable,

      name: computed,
    });
  }

  get name() {
    return itemsByName[this.refname].dname;
  }
}

export default Item;
