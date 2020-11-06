const guard = (pos, length) => (
  new RangeError(`cannot read ${length} bytes at position ${pos}`)
);

// Based on Dotabuff's Manta parsers
// See: https://github.com/dotabuff/manta/blob/master/reader.go
class Reader {
  constructor(buffer) {
    this.buffer = buffer;
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

  // Reads next aligned byte
  nextByte() {
    const { pos } = this;
    if (this.eof) {
      throw guard(pos, this.length);
    }
    this.pos += 1;
    return this.buffer[pos];
  }

  // Reads given number of bits from buffer
  readBits(count) {
    while (count > this.bitCount) {
      this.bitVal |= this.nextByte() << this.bitCount;
      this.bitCount += 8;
    }

    const value = this.bitVal & ((1 << count) - 1);
    this.bitVal >>= count;
    this.bitCount -= count;
    return value | 0;
  }

  // Reads a single byte
  readByte() {
    if (this.bitCount === 0) {
      return this.nextByte();
    }
    return this.readBits(8);
  }

  // Reads given length number of bytes from buffer
  readBytes(length) {
    if (this.bitCount === 0) {
      const start = this.pos;
      const end = start + length;
      if (end > this.length) {
        throw guard(start, length);
      }
      this.pos = end;
      return this.buffer.slice(start, end);
    }

    const buffer = Buffer.alloc(length);
    for (let i = 0; i < length; ++i) {
      buffer[i] = this.readBits(8);
    }
    return buffer;
  }

  // Reads an unsigned 32-bit varint
  readVarUint32() {
    const bits = 32;
    const max = ((bits + 6) / 7) * 7;
    let value = 0;
    let shift = 0;
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

  // Reads a variable length uint32 with special encoding in the last two bits
  readUBitVar() {
    let value = this.readBits(6);
    switch (value & 0x30) {
      case 16:
        value = (value & 15) | (this.readBits(4) << 4);
        break;
      case 32:
        value = (value & 15) | (this.readBits(8) << 4);
        break;
      case 48:
        value = (value & 15) | (this.readBits(28) << 4);
        break;
      default:
    }
    return value;
  }

  // Reads given length string from buffer
  readString(length, encoding = 'utf8') {
    return this.readBytes(length).toString(encoding);
  }

  // Skips given number of bytes
  skip(count) {
    const end = this.pos + count;
    if (end > this.length) {
      throw new RangeError(`cannot skip ${count} bytes`);
    }
    this.pos = end;
  }
}

export default Reader;
