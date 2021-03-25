import Unit from './Unit.js';

class Building extends Unit {
  constructor(...args) {
    super(...args);
    this.type = 'building';
  }
}

export default Building;
