import { computed, makeObservable, observable } from 'mobx';

import Position from './Position.js';

class Camera {
  constructor() {
    this.position = new Position();

    makeObservable(this, {
      position: observable,

      relX: computed,
      relY: computed,
    });
  }

  get relX() {
    return this.position.relX;
  }

  get relY() {
    // Adjust vertical coordinate to account for Dota 2's in-game perspective
    return this.position.relY + 0.05;
  }
}

export default Camera;
