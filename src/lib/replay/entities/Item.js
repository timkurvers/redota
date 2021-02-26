import { computed, makeObservable, observable } from 'mobx';

import { itemsByName } from '../../constants.js';
import Cooldown from '../Cooldown.js';

import Entity from './Entity.js';

class Item extends Entity {
  constructor(replay, ...args) {
    super(replay, ...args);

    this.charges = null;
    this.cooldown = new Cooldown(replay);

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
