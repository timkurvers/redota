import Reader from '../../../src/lib/parser/Reader.js';

describe('Reader', () => {
  describe('readBitInt', () => {
    const buffer = Buffer.from([
      0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
    ]);

    it('reads given number of bits from buffer as integer', () => {
      const r = new Reader(buffer);
      expect(r.readBitInt(7)).toEqual(0b01111111);
      expect(r.readBitInt(8)).toEqual(0xFF);
      expect(r.readBitInt(16)).toEqual(0xFFFF);
      expect(r.readBitInt(32)).toEqual(0xFFFFFFFF);
      expect(r.readBitInt(1)).toEqual(0x01);
    });
  });

  describe('skip', () => {
    const buffer = Buffer.from([
      0b00110111, 0b00001111,
    ]);

    it('skips given number of bytes', () => {
      const r = new Reader(buffer);
      expect(r.readBitInt(3)).toEqual(0b111);
      r.skip(1);
      expect(r.readBitInt(5)).toEqual(0b1);
    });
  });
});
