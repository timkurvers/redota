import { computed, makeObservable, observable } from 'mobx';

import { TEAM_COLORS, UNIT_NAMES } from '../../constants.js';
import { scale } from '../../utils/index.js';

class Unit {
  constructor(replay, handle) {
    this.replay = replay;
    this.handle = handle;

    this.class = null;
    this.teamID = null;
    this.x = 0;
    this.y = 0;
    this.rotation = null;
    this.hp = 0;
    this.hpMax = 0;
    this.mp = 0;
    this.mpMax = 0;
    this.isWaitingToSpawn = false;

    makeObservable(this, {
      class: observable,
      teamID: observable,
      x: observable,
      y: observable,
      rotation: observable,
      hp: observable,
      hpMax: observable,
      mp: observable,
      mpMax: observable,
      isWaitingToSpawn: observable,

      color: computed,
      isDead: computed,
      name: computed,
      relX: computed,
      relY: computed,
      team: computed,
    });
  }

  get color() {
    return TEAM_COLORS[this.teamID];
  }

  get isDead() {
    return this.hp <= 0;
  }

  get name() {
    return UNIT_NAMES[this.class];
  }

  get relX() {
    return scale(this.x);
  }

  get relY() {
    return scale(this.y);
  }

  get team() {
    return this.replay.teams.byID.get(this.teamID);
  }
}

export default Unit;
