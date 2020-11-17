class IndexedCollection extends Set {
  constructor(cls, ...indices) {
    super();

    this.class = cls;
    this.indices = indices.map((prop) => {
      const collection = `by${prop.charAt(0).toUpperCase()}${prop.slice(1)}`;
      this[collection] = {};
      return { prop, collection };
    });
  }

  add(instance) {
    super.add(instance);
    for (const { prop, collection } of this.indices) {
      const value = instance[prop];
      this[collection][value] = instance;
    }
  }

  delete(instance) {
    super.delete(instance);
    for (const { prop, collection } of this.indices) {
      const value = instance[prop];
      delete this[collection][value];
    }
  }

  create(...args) {
    const { class: Class } = this;
    const instance = new Class(...args);
    this.add(instance);
    return instance;
  }

  clear() {
    super.clear();
    for (const { collection } of this.indices) {
      this[collection] = {};
    }
  }
}

export default IndexedCollection;
