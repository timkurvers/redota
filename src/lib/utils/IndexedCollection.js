class IndexedCollection {
  constructor(keyProp, ...indices) {
    this.keyProp = keyProp;
    this.data = new Map();
    this.indices = indices.map((prop) => {
      const accessor = `by${prop.charAt(0).toUpperCase()}${prop.slice(1)}`;
      const collection = new Map();
      this[accessor] = collection;
      return { prop, collection };
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

export default IndexedCollection;
