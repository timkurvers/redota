import { makeObservable, observable } from 'mobx';

import Entity from './Entity.js';

class Ability extends Entity {
  constructor(...args) {
    super(...args);

    this.level = null;
    this.hidden = false;
    this.manaCost = null;
    this.cooldown = null;

    makeObservable(this, {
      hidden: observable,
      level: observable,
      manaCost: observable,
      cooldown: observable,
    });
  }

  get isSeasonal() {
    return this.refname.startsWith('seasonal_');
  }

  // TODO: Surely there is a better way to determine this?
  get isTalent() {
    return this.refname.startsWith('special_bonus_');
  }
}

export default Ability;
