import { computed, makeObservable, observable } from 'mobx';

class Game {
  constructor() {
    this.phase = null;
    this.preStartTime = null;
    this.startTime = null;
    this.stateTransitionTime = null;
    this.time = null;

    makeObservable(this, {
      phase: observable,
      preStartTime: observable,
      startTime: observable,
      stateTransitionTime: observable,
      time: observable,

      clockTime: computed,
    });
  }

  get clockTime() {
    // TODO: Handle game end time?
    if (this.startTime) {
      return this.time - this.startTime;
    }
    if (this.preStartTime) {
      return this.time - this.stateTransitionTime;
    }
    return null;
  }
}

export default Game;
