import { computed, makeObservable, observable } from 'mobx';

import Unit from './Unit.js';

class UnitWithInventory extends Unit {
  constructor(replay, handle) {
    super(replay, handle);

    this.inventoryHandles = [
      null, null, null,
      null, null, null,
    ];

    makeObservable(this, {
      inventoryHandles: observable,

      inventory: computed,
    });
  }

  get inventory() {
    return this.inventoryHandles.map((handle) => (
      this.replay.items.get(handle)
    ));
  }
}

export default UnitWithInventory;
