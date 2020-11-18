class Class {
  constructor(id, name, serializer) {
    this.id = id;
    this.name = name;
    this.serializer = serializer;
  }

  getFieldPaths(fp, state) {
    return this.serializer.getFieldPaths(fp, state);
  }

  getFieldPathForName(fp, name) {
    return this.serializer.getFieldPathForName(fp, name);
  }

  getNameForFieldPath(fp) {
    return this.serializer.getNameForFieldPath(fp, 0).join('.');
  }
}

export default Class;
