import { makeObservable, observable } from 'mobx';

class Ability {
  constructor(replay, handle) {
    this.replay = replay;
    this.handle = handle;

    this.refname = null;
    this.level = null;
    this.hidden = false;
    this.manaCost = null;

    makeObservable(this, {
      refname: observable,
      hidden: observable,
      level: observable,
      manaCost: observable,
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
