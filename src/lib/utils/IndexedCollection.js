/* eslint-disable max-classes-per-file */

import {
  action, computed, makeObservable, observable,
} from 'mobx';

class IndexedCollection {
  constructor(keyProp, indices = {}) {
    this.keyProp = keyProp;
    this.data = new Map();

    this.indices = Object.entries(indices).map(([accessor, prop]) => {
      const collection = new Map();
      this[accessor] = collection;
      return { accessor, prop, collection };
    });
  }

  get size() {
    return this.data.size;
  }

  add(instance) {
    this.data.set(instance[this.keyProp], instance);
    for (const { prop, collection } of this.indices) {
      const key = instance[prop];
      collection.set(key, instance);
    }
  }

  get(key) {
    return this.data.get(key);
  }

  delete(instance) {
    this.data.delete(instance[this.keyProp]);
    for (const { prop, collection } of this.indices) {
      const key = instance[prop];
      collection.delete(key);
    }
  }

  clear() {
    this.data.clear();
    for (const { collection } of this.indices) {
      collection.clear();
    }
  }

  filter(cb) {
    const filtered = [];
    for (const [key, instance] of this.data) {
      if (cb(instance, key)) {
        filtered.push(instance);
      }
    }
    return filtered;
  }

  find(cb) {
    for (const [key, instance] of this.data) {
      if (cb(instance, key)) {
        return instance;
      }
    }
    return null;
  }

  map(cb) {
    const mapped = [];
    for (const [key, instance] of this.data) {
      mapped.push(cb(instance, key));
    }
    return mapped;
  }

  * [Symbol.iterator]() {
    for (const [, instance] of this.data) {
      yield instance;
    }
  }
}

class ObservableIndexedCollection extends IndexedCollection {
  constructor(keyProp, indices = {}) {
    super(keyProp, indices);

    makeObservable(this, {
      data: observable,

      size: computed,
      get: observable,
      filter: observable,
      find: observable,
      map: observable,
      [Symbol.iterator]: observable,

      add: action,
      delete: action,
      clear: action,
    });

    for (const entry of this.indices) {
      makeObservable(this, {
        [entry.accessor]: observable,
      });
      // Ensure collection points to the decorated observable map
      entry.collection = this[entry.accessor];
    }
  }
}

export default IndexedCollection;
export { ObservableIndexedCollection };
