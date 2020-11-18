/* eslint-disable no-param-reassign */

// See: https://github.com/dotabuff/manta/blob/master/serializer.go
class Serializer {
  constructor(name, version) {
    this.name = name;
    this.version = version;
    this.fields = [];
  }

  get id() {
    return `${this.name}(${this.version})`;
  }

  getDecoderForFieldPath(fp, pos) {
    const index = fp.path[pos];
    const field = this.fields[index];
    if (!field) {
      throw new Error(`serializer ${this.id}: fp ${fp} has no field (${index})`);
    }
    return field.getDecoderForFieldPath(fp, pos + 1);
  }

  getFieldForFieldPath(fp, pos) {
    const index = fp.path[pos];
    // TODO: Guard?
    return this.fields[index].getFieldForFieldPath(fp, pos + 1);
  }

  // TODO: Mutates fp argument
  getFieldPathForName(fp, name) {
    for (const [index, field] of this.fields.entries()) {
      if (name === field.varName) {
        fp.path[fp.last] = index;
        return true;
      }
      if (name.startsWith(`${field.varName}.`)) {
        fp.path[fp.last] = index;
        fp.last++;
        return field.getFieldPathForName(fp, name.slice(field.varName.length + 1));
      }
    }
    return false;
  }

  // TODO: Mutates fp argument
  getFieldPaths(fp, state) {
    const fps = [];
    for (const [index, field] of this.fields.entries()) {
      fp.path[fp.last] = index;
      fps.push(...field.getFieldPaths(fp, state));
    }
    return fps;
  }

  getNameForFieldPath(fp, pos) {
    const index = fp.path[pos];
    // TODO: Guard?
    return this.fields[index].getNameForFieldPath(fp, pos + 1);
  }

  getTypeForFieldPath(fp, pos) {
    const index = fp.path[pos];
    // TODO: Guard?
    return this.fields[index].getTypeForFieldPath(fp, pos + 1);
  }
}

export default Serializer;
