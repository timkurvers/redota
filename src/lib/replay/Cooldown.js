import { computed, makeObservable, observable } from 'mobx';

class Cooldown {
  constructor(replay) {
    this.replay = replay;

    this.value = 0;
    this.duration = 0;

    makeObservable(this, {
      value: observable,
      duration: observable,

      remaining: computed,
    });
  }

  get remaining() {
    if (this.value <= this.duration) {
      return this.value;
    }
    // Older replays store cooldown in absolute game time
    return this.value - this.replay.game.time;
  }
}

export default Cooldown;
