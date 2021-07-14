import { computed, makeObservable, observable } from 'mobx';

import { compareByProp } from '../../utils/index.js';

import Entity from './Entity.js';

const byID = compareByProp('id');

class Team extends Entity {
  constructor(...args) {
    super(...args);

    this.id = null;
    this.name = null;
    this.kills = 0;
    this.proID = null;

    makeObservable(this, {
      id: observable,
      name: observable,
      kills: observable,
      proID: observable,

      heroes: computed,
      players: computed,
      units: computed,
    });
  }

  get heroes() {
    return this.players.map((p) => p.hero).filter(Boolean);
  }

  get players() {
    const players = this.replay.players.filter((p) => p.teamID === this.id);
    return players.sort(byID);
  }

  get units() {
    return this.replay.units.filter((u) => u.teamID === this.id);
  }
}

export default Team;
