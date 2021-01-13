import { computed, makeObservable, observable } from 'mobx';

import { PLAYER_COLORS } from '../../constants.js';

class Player {
  constructor(replay, handle) {
    this.replay = replay;
    this.handle = handle;

    this.id = null;
    this.name = null;
    this.heroID = null;
    this.teamID = null;
    this.kills = 0;
    this.assists = 0;
    this.deaths = 0;
    this.isBot = false;
    this.isBroadcaster = false;

    makeObservable(this, {
      id: observable,
      name: observable,
      heroID: observable,
      teamID: observable,
      kills: observable,
      assists: observable,
      deaths: observable,
      isBot: observable,
      isBroadcaster: observable,

      color: computed,
      index: computed,
      team: computed,
    });
  }

  get color() {
    return PLAYER_COLORS[this.id];
  }

  get hero() {
    return this.replay.units.get(this.heroID);
  }

  get index() {
    return String(this.id).padStart(4, '0');
  }

  get team() {
    return this.replay.teams.byID.get(this.teamID);
  }
}

export default Player;
