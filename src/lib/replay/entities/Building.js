import Unit from './Unit.js';

class Building extends Unit {
  constructor(...args) {
    super(...args);
    this.type = 'building';
  }

  get isTower() {
    // Note: Excludes npc_dota_watch_tower
    return this.refname.endsWith('guys_tower');
  }
}

export default Building;
