import { makeObservable, observable } from 'mobx';

class Ability {
  constructor(replay, eid) {
    this.replay = replay;
    this.eid = eid;

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

  // TODO: Surely there is a better way to determine this?
  get isTalent() {
    return this.refname.startsWith('special_bonus_');
  }
}

export default Ability;
