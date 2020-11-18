import Reader from '../../../src/lib/parser/Reader.js';

describe('Reader', () => {
  describe('readBitInt', () => {
    const buffer = Buffer.from([
      0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
    ]);

    it('reads given number of bits from buffer as integer', () => {
      const r = new Reader(buffer);
      expect(r.readBitInt(7)).toEqual(0x7f);
      expect(r.readBitInt(8)).toEqual(0xff);
      expect(r.readBitInt(16)).toEqual(0xffff);
      expect(r.readBitInt(32)).toEqual(0xffffffff);
      expect(r.readBitInt(1)).toEqual(0x01);
    });
  });
});
