/* eslint-disable key-spacing */

const FORMAT_MATCHER = /([^<[*]+)(<\s(.*)\s>)?(\*)?(\[(.*)\])?/;

const ITEM_COUNTS = {
  MAX_ITEM_STOCKS:             8,
  MAX_ABILITY_DRAFT_ABILITIES: 48,
};

// See: https://github.com/dotabuff/manta/blob/master/field_type.go
class FieldType {
  constructor(baseType, pointer) {
    this.baseType = baseType;
    this.pointer = pointer;
    this.genericType = null;
    this.count = null;
  }

  toString() {
    let str = this.baseType;
    if (this.genericType !== null) {
      str += `<${this.genericType}>`;
    }
    if (this.pointer) {
      str += '*';
    }
    if (this.count > 0) {
      str += `[${this.count}]`;
    }
    return str;
  }

  static for(name) {
    const match = FORMAT_MATCHER.exec(name);
    if (!match) {
      throw new Error(`could not parse field type from: ${name}`);
    }

    const fieldType = new this(match[1], match[4] === '*');

    if (match[3]) {
      fieldType.genericType = this.for(match[3]);
    }

    const countValue = match[6];
    if (countValue) {
      if (countValue in ITEM_COUNTS) {
        fieldType.count = ITEM_COUNTS[countValue];
      } else if (+countValue > 0) {
        fieldType.count = +countValue;
      } else {
        fieldType.count = 1024;
      }
    }

    return fieldType;
  }
}

export default FieldType;
