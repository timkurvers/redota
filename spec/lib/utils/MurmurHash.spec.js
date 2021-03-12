import MurmurHash from '../../../src/lib/utils/MurmurHash.js';

describe('MurmurHash', () => {
  describe('hash64', () => {
    const hash = (value) => MurmurHash.hash64(value, 0xEDABCDEF);

    it('calculates 64-bit hash for given string', () => {
      expect(hash('models/creeps/roshan/roshan.vmdl')).toBe(13408245473624998220n);
      expect(hash('models/heroes/death_prophet/death_prophet.vmdl')).toBe(11242784534770604160n);
      expect(hash('models/props_gameplay/default_ward.vmdl')).toBe(6823511350490192210n);
      expect(hash('models/props_gameplay/donkey.vmdl')).toBe(9433937411225346325n);
    });
  });
});
