import { computed, makeObservable, observable } from 'mobx';

// Day between 1/4th and 3/4th of full time cycle
const cycle = (1 << 16) - 1;
const DAY_START = cycle * 0.25;
const NIGHT_START = cycle * 0.75;

class Game {
  constructor() {
    this.phase = null;
    this.preStartTime = null;
    this.startTime = null;
    this.stateTransitionTime = null;
    this.time = null;

    this.timeOfDay = null;
    this.isNightStalkerNight = false;
    this.isTemporaryDay = false;
    this.isTemporaryNight = false;

    this.isPaused = false;
    this.pauseStartTick = null;
    this.totalPausedTicks = 0;

    makeObservable(this, {
      phase: observable,
      preStartTime: observable,
      startTime: observable,
      stateTransitionTime: observable,
      time: observable,

      timeOfDay: observable,
      isNightStalkerNight: observable,
      isTemporaryDay: observable,
      isTemporaryNight: observable,

      isPaused: observable,
      pauseStartTick: observable,
      totalPausedTicks: observable,

      clockTime: computed,
      isDay: computed,
      isNight: computed,
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

  get isDay() {
    if (this.isTemporaryDay) {
      return true;
    }
    if (this.isTemporaryNight || this.isNightStalkerNight) {
      return false;
    }
    return this.timeOfDay >= DAY_START && this.timeOfDay < NIGHT_START;
  }

  get isNight() {
    return !this.isDay;
  }
}

export default Game;
