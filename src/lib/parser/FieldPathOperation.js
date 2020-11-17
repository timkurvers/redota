/* eslint-disable no-param-reassign */

// See: https://github.com/dotabuff/manta/blob/master/field_path.go
class FieldPathOperation {
  constructor(name, weight, execute) {
    this.name = name;
    this.weight = weight;
    this.execute = execute;
  }
}

const operations = [
  new FieldPathOperation('PlusOne', 36271, (fp) => {
    fp.path[fp.last] += 1;
  }),
  new FieldPathOperation('PlusTwo', 10334, (fp) => {
    fp.path[fp.last] += 2;
  }),
  new FieldPathOperation('PlusThree', 1375, (fp) => {
    fp.path[fp.last] += 3;
  }),
  new FieldPathOperation('PlusFour', 646, (fp) => {
    fp.path[fp.last] += 4;
  }),
  new FieldPathOperation('PlusN', 4128, (fp, reader) => {
    fp.path[fp.last] += reader.readUBitVarFieldPath() + 5;
  }),
  new FieldPathOperation('PushOneLeftDeltaZeroRightZero', 35, (fp) => {
    fp.last++;
    fp.path[fp.last] = 0;
  }),
  new FieldPathOperation('PushOneLeftDeltaZeroRightNonZero', 3, (fp, reader) => {
    fp.last++;
    fp.path[fp.last] = reader.readUBitVarFieldPath();
  }),
  new FieldPathOperation('PushOneLeftDeltaOneRightZero', 521, (fp) => {
    fp.path[fp.last] += 1;
    fp.last++;
    fp.path[fp.last] = 0;
  }),
  new FieldPathOperation('PushOneLeftDeltaOneRightNonZero', 2942, (fp, reader) => {
    fp.path[fp.last] += 1;
    fp.last++;
    fp.path[fp.last] = reader.readUBitVarFieldPath();
  }),
  new FieldPathOperation('PushOneLeftDeltaNRightZero', 560, (fp, reader) => {
    fp.path[fp.last] += reader.readUBitVarFieldPath();
    fp.last++;
    fp.path[fp.last] = 0;
  }),
  new FieldPathOperation('PushOneLeftDeltaNRightNonZero', 471, (fp, reader) => {
    fp.path[fp.last] += reader.readUBitVarFieldPath() + 2;
    fp.last++;
    fp.path[fp.last] = reader.readUBitVarFieldPath() + 1;
  }),
  new FieldPathOperation('PushOneLeftDeltaNRightNonZeroPack6Bits', 10530, (fp, reader) => {
    fp.path[fp.last] += reader.readBitInt(3) + 2;
    fp.last++;
    fp.path[fp.last] = reader.readBitInt(3) + 1;
  }),
  new FieldPathOperation('PushOneLeftDeltaNRightNonZeroPack8Bits', 251, (fp, reader) => {
    fp.path[fp.last] += reader.readBitInt(4) + 2;
    fp.last++;
    fp.path[fp.last] = reader.readBitInt(4) + 1;
  }),
  new FieldPathOperation('PushTwoLeftDeltaZero', 0, (fp, reader) => {
    fp.last++;
    fp.path[fp.last] += reader.readUBitVarFieldPath();
    fp.last++;
    fp.path[fp.last] += reader.readUBitVarFieldPath();
  }),
  new FieldPathOperation('PushTwoPack5LeftDeltaZero', 0, (fp, reader) => {
    fp.last++;
    fp.path[fp.last] = reader.readBitInt(5);
    fp.last++;
    fp.path[fp.last] = reader.readBitInt(5);
  }),
  new FieldPathOperation('PushThreeLeftDeltaZero', 0, (fp, reader) => {
    fp.last++;
    fp.path[fp.last] += reader.readUBitVarFieldPath();
    fp.last++;
    fp.path[fp.last] += reader.readUBitVarFieldPath();
    fp.last++;
    fp.path[fp.last] += reader.readUBitVarFieldPath();
  }),
  new FieldPathOperation('PushThreePack5LeftDeltaZero', 0, (fp, reader) => {
    fp.last++;
    fp.path[fp.last] = reader.readBitInt(5);
    fp.last++;
    fp.path[fp.last] = reader.readBitInt(5);
    fp.last++;
    fp.path[fp.last] = reader.readBitInt(5);
  }),
  new FieldPathOperation('PushTwoLeftDeltaOne', 0, (fp, reader) => {
    fp.path[fp.last] += 1;
    fp.last++;
    fp.path[fp.last] += reader.readUBitVarFieldPath();
    fp.last++;
    fp.path[fp.last] += reader.readUBitVarFieldPath();
  }),
  new FieldPathOperation('PushTwoPack5LeftDeltaOne', 0, (fp, reader) => {
    fp.path[fp.last] += 1;
    fp.last++;
    fp.path[fp.last] += reader.readBitInt(5);
    fp.last++;
    fp.path[fp.last] += reader.readBitInt(5);
  }),
  new FieldPathOperation('PushThreeLeftDeltaOne', 0, (fp, reader) => {
    fp.path[fp.last] += 1;
    fp.last++;
    fp.path[fp.last] += reader.readUBitVarFieldPath();
    fp.last++;
    fp.path[fp.last] += reader.readUBitVarFieldPath();
    fp.last++;
    fp.path[fp.last] += reader.readUBitVarFieldPath();
  }),
  new FieldPathOperation('PushThreePack5LeftDeltaOne', 0, (fp, reader) => {
    fp.path[fp.last] += 1;
    fp.last++;
    fp.path[fp.last] += reader.readBitInt(5);
    fp.last++;
    fp.path[fp.last] += reader.readBitInt(5);
    fp.last++;
    fp.path[fp.last] += reader.readBitInt(5);
  }),
  new FieldPathOperation('PushTwoLeftDeltaN', 0, (fp, reader) => {
    fp.path[fp.last] += reader.readUBitVar() + 2;
    fp.last++;
    fp.path[fp.last] += reader.readUBitVarFieldPath();
    fp.last++;
    fp.path[fp.last] += reader.readUBitVarFieldPath();
  }),
  new FieldPathOperation('PushTwoPack5LeftDeltaN', 0, (fp, reader) => {
    fp.path[fp.last] += reader.readUBitVar() + 2;
    fp.last++;
    fp.path[fp.last] += reader.readBitInt(5);
    fp.last++;
    fp.path[fp.last] += reader.readBitInt(5);
  }),
  new FieldPathOperation('PushThreeLeftDeltaN', 0, (fp, reader) => {
    fp.path[fp.last] += reader.readUBitVar() + 2;
    fp.last++;
    fp.path[fp.last] += reader.readUBitVarFieldPath();
    fp.last++;
    fp.path[fp.last] += reader.readUBitVarFieldPath();
    fp.last++;
    fp.path[fp.last] += reader.readUBitVarFieldPath();
  }),
  new FieldPathOperation('PushThreePack5LeftDeltaN', 0, (fp, reader) => {
    fp.path[fp.last] += reader.readUBitVar() + 2;
    fp.last++;
    fp.path[fp.last] += reader.readBitInt(5);
    fp.last++;
    fp.path[fp.last] += reader.readBitInt(5);
    fp.last++;
    fp.path[fp.last] += reader.readBitInt(5);
  }),
  new FieldPathOperation('PushN', 0, (fp, reader) => {
    const n = reader.readUBitVar();
    fp.path[fp.last] += reader.readUBitVar();
    for (let i = 0; i < n; ++i) {
      fp.last++;
      fp.path[fp.last] += reader.readUBitVarFieldPath();
    }
  }),
  new FieldPathOperation('PushNAndNonTopological', 310, (fp, reader) => {
    for (let i = 0; i <= fp.last; ++i) {
      if (reader.readBitFlag()) {
        fp.path[i] += reader.readVarInt32() + 1;
      }
    }
    const count = reader.readUBitVar();
    for (let i = 0; i < count; ++i) {
      fp.last++;
      fp.path[fp.last] = reader.readUBitVarFieldPath();
    }
  }),
  new FieldPathOperation('PopOnePlusOne', 2, (fp) => {
    fp.pop(1);
    fp.path[fp.last] += 1;
  }),
  new FieldPathOperation('PopOnePlusN', 0, (fp, reader) => {
    fp.pop(1);
    fp.path[fp.last] += reader.readUBitVarFieldPath() + 1;
  }),
  new FieldPathOperation('PopAllButOnePlusOne', 1837, (fp) => {
    fp.pop(fp.last);
    fp.path[0] += 1;
  }),
  new FieldPathOperation('PopAllButOnePlusN', 149, (fp, reader) => {
    fp.pop(fp.last);
    fp.path[0] += reader.readUBitVarFieldPath() + 1;
  }),
  new FieldPathOperation('PopAllButOnePlusNPack3Bits', 300, (fp, reader) => {
    fp.pop(fp.last);
    fp.path[0] += reader.readBitInt(3) + 1;
  }),
  new FieldPathOperation('PopAllButOnePlusNPack6Bits', 634, (fp, reader) => {
    fp.pop(fp.last);
    fp.path[0] += reader.readBitInt(6) + 1;
  }),
  new FieldPathOperation('PopNPlusOne', 0, (fp, reader) => {
    fp.pop(reader.readUBitVarFieldPath());
    fp.path[fp.last] += 1;
  }),
  new FieldPathOperation('PopNPlusN', 0, (fp, reader) => {
    fp.pop(reader.readUBitVarFieldPath());
    fp.path[fp.last] += reader.readVarInt32();
  }),
  new FieldPathOperation('PopNAndNonTopographical', 1, (fp, reader) => {
    fp.pop(reader.readUBitVarFieldPath());
    for (let i = 0; i <= fp.last; ++i) {
      if (reader.readBitFlag()) {
        fp.path[i] += reader.readVarInt32();
      }
    }
  }),
  new FieldPathOperation('NonTopoComplex', 76, (fp, reader) => {
    for (let i = 0; i <= fp.last; ++i) {
      if (reader.readBitFlag()) {
        fp.path[i] += reader.readVarInt32();
      }
    }
  }),
  new FieldPathOperation('NonTopoPenultimatePlusOne', 271, (fp) => {
    fp.path[fp.last - 1] += 1;
  }),
  new FieldPathOperation('NonTopoComplexPack4Bits', 99, (fp, reader) => {
    for (let i = 0; i <= fp.last; ++i) {
      if (reader.readBitFlag()) {
        fp.path[i] += reader.readBitInt(4) - 7;
      }
    }
  }),
  new FieldPathOperation('FieldPathEncodeFinish', 25474, (fp) => {
    fp.done = true;
  }),
];

export default FieldPathOperation;
export { operations };
