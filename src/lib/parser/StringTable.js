/* eslint-disable max-classes-per-file, no-param-reassign */

import snappy from 'snappyjs';

import Reader from './Reader.js';

const KEY_HISTORY_BITS = 5;
const KEY_HISTORY_SIZE = (1 << KEY_HISTORY_BITS);
const KEY_HISTORY_MASK = (KEY_HISTORY_SIZE - 1);

// See: https://github.com/dotabuff/manta/blob/master/string_table.go
class StringTable {
  constructor(name, userDataFixedSize, userDataSize, userDataSizeBits, flags) {
    this.name = name;
    this.index = null;
    this.userDataFixedSize = userDataFixedSize;
    this.userDataSize = userDataSize;
    this.userDataSizeBits = userDataSizeBits;
    this.flags = flags;
    this.entries = [];
  }

  clear() {
    this.entries.length = 0;
  }
}

class StringTableEntry {
  constructor(index, key, data) {
    this.index = index;
    this.key = key;
    this.data = data;
  }

  // See: https://github.com/skadistats/clarity/blob/master/src/main/java/skadistats/clarity/processor/stringtables/S2StringTableEmitter.java#L78
  static decode(table, buffer, numEntries) {
    const keyHistory = new Array(KEY_HISTORY_SIZE);
    const reader = new Reader(buffer);

    let index = -1;
    for (let i = 0; i < numEntries; ++i) {
      if (reader.readBitFlag()) {
        ++index;
      } else {
        index += reader.readVarUint32() + 2;
      }

      let key = null;
      if (reader.readBitFlag()) {
        if (reader.readBitFlag()) {
          const base = i > KEY_HISTORY_SIZE ? i : 0;
          const offset = reader.readBitInt(5);
          const length = reader.readBitInt(5);
          const str = keyHistory[(base + offset) & KEY_HISTORY_MASK];
          key = str.substring(0, length) + reader.readString();
        } else {
          key = reader.readString();
        }
      }

      let data = null;
      if (reader.readBitFlag()) {
        let isCompressed = false;
        let bitLength;

        if (table.userDataFixedSize) {
          bitLength = table.userDataSizeBits;
        } else {
          if ((table.flags & 0x1) !== 0) {
            isCompressed = reader.readBitFlag();
          }
          bitLength = reader.readBitInt(17) * 8;
        }

        data = reader.readBitsAsBytes(bitLength);
        if (isCompressed) {
          data = snappy.uncompress(data);
        }
      }

      const entryCount = table.entries.length;
      if (index < entryCount) {
        table.entries[index].data = data;
        key = table.entries[index].key;
      } else if (index === entryCount) {
        const entry = new this(index, key, data);
        table.entries.push(entry);
      } else {
        throw new Error(`index and entry count mismatch for table: ${table.name}`);
      }

      keyHistory[i & KEY_HISTORY_MASK] = key;
    }
  }
}

export default StringTable;
export { StringTableEntry };
