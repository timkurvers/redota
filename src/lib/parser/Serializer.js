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
