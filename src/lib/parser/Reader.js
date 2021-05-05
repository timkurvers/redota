/* eslint-disable no-param-reassign */

import FieldPath from './FieldPath.js';

const guard = (pos, length) => (
  new RangeError(`cannot read ${length} bytes at position ${pos}`)
);

// See: https://github.com/dotabuff/manta/blob/master/reader.go
class Reader {
  constructor(buffer) {
    this.buffer = Buffer.from(buffer);
    this.pos = 0;

    this.bitVal = 0;
    this.bitCount = 0;
  }

  get length() {
    return this.buffer.length;
  }

  get eof() {
    return this.pos >= this.length;
  }

  get bitLength() {
    return this.length * 8;
  }

  get bitPos() {
    return (this.pos - 1) * 8 + (8 - this.bitCount);
  }

  get posWithBit() {
    const { bitCount, pos } = this;
    if (bitCount > 0) {
      return `${pos - 1}.${8 - bitCount}`;
    }
    return pos;
  }

  get remaining() {
    return this.length - this.pos;
  }

  // Reads next aligned byte
  nextByte() {
    const { pos } = this;
    if (this.eof) {
      throw guard(pos, 1);
    }
    this.pos += 1;
    return this.buffer[pos];
  }

  // Reads a bit angle of given size
  readAngle(n) {
    return (this.readBitInt(n) * 360.0) / (1 << n);
  }

  // Reads given number of bits from buffer as IEEE-754 float
  readBitFloat(count) {
    const value = this.readBitInt(count);
    const buffer = Buffer.alloc(4);
    buffer.writeUInt32LE(value);
    return buffer.readFloatLE();
  }

  // Reads given number of bits from buffer as integer
  readBitInt(count) {
    if (count >= 32) {
      // Casting numbers to BigInts just for bitwise operations is disastrous
      // for performance as this method is THE hotspot for the parser.
      // By only using it when absolutely necessary parsing speeds up by 10x.
      const countn = BigInt(count);
      let bitVal = BigInt(this.bitVal);
      let bitCount = BigInt(this.bitCount);
      while (countn > bitCount) {
        bitVal |= BigInt(this.nextByte()) << bitCount;
        bitCount += 8n;
      }
      const value = bitVal & ((1n << countn) - 1n);
      this.bitVal = Number(bitVal >> countn);
      this.bitCount = Number(bitCount - countn);
      return Number(value);
    }

    while (count > this.bitCount) {
      this.bitVal |= this.nextByte() << this.bitCount;
      this.bitCount += 8;
    }
    const value = this.bitVal & ((1 << count) - 1);
    this.bitVal >>= count;
    this.bitCount -= count;
    return value;
  }

  // Reads a single bit as a boolean
  readBitFlag() {
    return this.readBitInt(1) === 1;
  }

  // Reads given number of bits as bytes
  readBitsAsBytes(count) {
    const bytes = [];
    for (; count >= 8; count -= 8) {
      bytes.push(this.readByte());
    }
    if (count > 0) {
      bytes.push(this.readBitInt(count));
    }
    return Buffer.from(bytes);
  }

  // Reads a single byte
  readByte() {
    if (this.bitCount === 0) {
      return this.nextByte();
    }
    return this.readBitInt(8);
  }

  // Reads given length number of bytes from buffer
  readBytes(count) {
    if (this.bitCount === 0) {
      const start = this.pos;
      const end = start + count;
      if (end > this.length) {
        throw guard(start, count);
      }
      this.pos = end;
      return this.buffer.slice(start, end);
    }

    const buffer = Buffer.alloc(count);
    for (let i = 0; i < count; ++i) {
      buffer[i] = this.readBitInt(8);
    }
    return buffer;
  }

  // Reads a float32 coordinate from buffer
  readCoord() {
    let value = 0.0;

    let intval = this.readBitInt(1);
    let fractval = this.readBitInt(1);
    let signbit = false;

    if (intval !== 0 || fractval !== 0) {
      signbit = this.readBitFlag();
      if (intval !== 0) {
        intval = this.readBitInt(14) + 1;
      }
      if (fractval !== 0) {
        fractval = this.readBitInt(5);
      }
      value = intval + fractval * (1.0 / (1 << 5));
      if (signbit) {
        value = -value;
      }
    }

    return value;
  }

  // Reads a normalized float vector
  read3BitNormal() {
    const vec = [0.0, 0.0, 0.0];

    const hasX = this.readBitFlag();
    const haxY = this.readBitFlag();
    if (hasX) {
      vec[0] = this.readNormal();
    }
    if (haxY) {
      vec[1] = this.readNormal();
    }

    const negZ = this.readBitFlag();
    const prodsum = vec[0] * vec[0] + vec[1] * vec[1];
    if (prodsum < 1.0) {
      vec[2] = Math.sqrt(1.0 - prodsum);
    } else {
      vec[2] = 0.0;
    }
    if (negZ) {
      vec[2] = -vec[2];
    }
    return vec;
  }

  // Reads fields into given state using given serializer
  readFieldsInto(state, serializer) {
    const fps = FieldPath.from(this);
    const delta = {};
    for (const fp of fps) {
      const decoder = serializer.getDecoderForFieldPath(fp, 0);
      const value = decoder(this);
      // TODO: This slows down raw parsing pretty significantly
      const name = serializer.getNameForFieldPath(fp, 0).join('.');
      state.set(fp, value);
      delta[name] = value;
    }
    return delta;
  }

  // Reads given length string from buffer
  readStringN(length, encoding = 'utf8') {
    return this.readBytes(length).toString(encoding);
  }

  // Reads null-terminated string from buffer in given encoding
  readString(encoding = 'utf8') {
    const bytes = [];
    for (;;) {
      const byte = this.readByte();
      if (byte === 0) {
        break;
      }
      bytes.push(byte);
    }

    return Buffer.from(bytes).toString(encoding);
  }

  // Reads a variable length uint32 with special encoding in the last two bits
  readUBitVar() {
    let value = this.readBitInt(6);
    switch (value & 0x30) {
      case 16:
        value = (value & 15) | (this.readBitInt(4) << 4);
        break;
      case 32:
        value = (value & 15) | (this.readBitInt(8) << 4);
        break;
      case 48:
        value = (value & 15) | (this.readBitInt(28) << 4);
        break;
      default:
    }
    return value;
  }

  // Reads a variable length uint32 encoded using fieldpath encoding
  readUBitVarFieldPath() {
    if (this.readBitFlag()) {
      return this.readBitInt(2);
    }
    if (this.readBitFlag()) {
      return this.readBitInt(4);
    }
    if (this.readBitFlag()) {
      return this.readBitInt(10);
    }
    if (this.readBitFlag()) {
      return this.readBitInt(17);
    }
    return this.readBitInt(31);
  }

  // Reads a little-endian uint32
  readUint32LE() {
    return this.readBytes(4).readUInt32LE();
  }

  // Reads a little-endian uint64
  readUint64LE() {
    return this.readBytes(8).readBigUInt64LE();
  }

  // Reads a signed 32-bit varint
  readVarInt32() {
    const uint = this.readVarUint32();
    let value = uint >> 1;
    if (uint & 1 !== 0) {
      value = ~value;
    }
    return value;
  }

  // Reads an unsigned 32-bit varint
  readVarUint32() {
    const bits = 32;
    const max = ((bits + 6) / 7) * 7;
    let value = 0;
    let shift = 0;
    // TODO: Potential 32-bit return value overflowing here
    for (;;) {
      const byte = this.readByte();
      value |= (byte & 0x7F) << shift;
      shift += 7;
      if ((byte & 0x80) === 0 || (shift === max)) {
        break;
      }
    }
    return value;
  }

  // Reads an unsigned 64-bit varint
  readVarUint64() {
    let value = 0n;
    let shift = 0n;
    for (let i = 0; ; ++i) {
      const byte = BigInt(this.readByte());
      if (byte < 0x80) {
        if (i > 9 || (i === 9 && byte > 1)) {
          throw new Error('varint overflows uint64');
        }
        return value | (byte << shift);
      }
      value |= (byte & 0x7fn) << shift;
      shift += 7n;
    }
  }

  // Skips given number of bytes
  skip(count) {
    const end = this.pos + count;
    if (end > this.length) {
      throw new RangeError(`cannot skip ${count} bytes`);
    }
    this.pos = end;
    if (this.bitCount > 0) {
      this.bitVal = this.buffer[this.pos - 1] >> (8 - this.bitCount);
    }
  }

  // Calculates amount of bits needed for given number
  static calcBitsNeededFor(n) {
    return Math.log2(n) + 1 | 0;
  }
}

export default Reader;
