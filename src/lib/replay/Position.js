import { computed, makeObservable, observable } from 'mobx';

import { CELL_SIZE, MAP_HALF_SIZE } from '../constants.js';
import { scale } from '../utils/index.js';

class Position {
  constructor() {
    this.cellX = 0;
    this.cellY = 0;
    this.vecX = 0;
    this.vecY = 0;

    makeObservable(this, {
      cellX: observable,
      cellY: observable,
      vecX: observable,
      vecY: observable,

      x: computed,
      y: computed,
      relX: computed,
      relY: computed,
    });
  }

  get x() {
    return this.cellX * CELL_SIZE + this.vecX;
  }

  get y() {
    return this.cellY * CELL_SIZE + this.vecY;
  }

  get relX() {
    return scale(this.x - MAP_HALF_SIZE);
  }

  get relY() {
    return scale(this.y - MAP_HALF_SIZE);
  }
}

export default Position;
