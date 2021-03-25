import { makeObservable, observable } from 'mobx';

import UnitWithInventory from './UnitWithInventory.js';

class Courier extends UnitWithInventory {
  constructor(...args) {
    super(...args);
    this.type = 'courier';

    this.isFlying = false;

    makeObservable(this, {
      isFlying: observable,
    });
  }

  get refname() {
    if (this.isFlying) {
      return 'npc_dota_flying_courier';
    }
    return super.refname;
  }
}

export default Courier;
