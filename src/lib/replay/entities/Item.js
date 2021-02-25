import { computed, makeObservable, observable } from 'mobx';

import { itemsByName } from '../../constants.js';

import Entity from './Entity.js';

class Item extends Entity {
  constructor(...args) {
    super(...args);

    this.charges = null;
    this.cooldown = null;

    makeObservable(this, {
      charges: observable,
      cooldown: observable,

      name: computed,
    });
  }

  get name() {
    return itemsByName[this.refname.replace('item_', '')].dname;
  }
}

export default Item;
