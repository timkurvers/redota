import { computed, makeObservable, observable } from 'mobx';

import Cooldown from '../Cooldown.js';
import { itemsByName } from '../../definitions/index.js';

import Entity from './Entity.js';

class Item extends Entity {
  constructor(replay, ...args) {
    super(replay, ...args);

    this.acquireTime = null;
    this.charges = null;
    this.cooldown = new Cooldown(replay);
    this.level = null;
    this.manaCost = null;

    this.definition = itemsByName[this.refname.replace('item_', '')] || {
      dname: this.refname,
    };

    makeObservable(this, {
      acquireTime: observable,
      charges: observable,
      cooldown: observable,
      level: observable,
      manaCost: observable,

      annotation: computed,
      name: computed,
    });
  }

  get annotation() {
    const { refname } = this;
    if (refname === 'item_aegis') {
      // TODO: Verify this calculation with an expiring aegis in-game
      const duration = 300;
      const remaining = duration - (this.replay.game.time - this.acquireTime);
      return `${remaining | 0}s`;
    }
    if (refname === 'item_black_king_bar') {
      return `${11 - this.level}s`;
    }
    return null;
  }

  get name() {
    return this.definition.dname;
  }
}

export default Item;
