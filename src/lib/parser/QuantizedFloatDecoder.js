/* eslint-disable key-spacing */

const Flag = {
  ROUNDDOWN:   (1 << 0),
  ROUNDUP:     (1 << 1),
  ENCODE_ZERO: (1 << 2),
  ENCODE_INTS: (1 << 3),
};

// See: https://github.com/dotabuff/manta/blob/master/quantizedfloat.go
class QuantizedFloatDecoder {
  constructor(bitCount, flags, lowValue, highValue) {
    if (bitCount === 0 || bitCount >= 32) {
      this.noScale = true;
      this.bitCount = 32;
      throw new Error('quantized float with bitCount 32 not yet supported');
    }

    this.noScale = false;
    this.bitCount = bitCount;
    this.offset = 0.0;

    if (lowValue !== null) {
      this.low = lowValue;
    } else {
      this.low = 0.0;
    }

    if (highValue !== null) {
      this.high = highValue;
    } else {
      this.high = 1.0;
    }

    if (flags !== null) {
      this.flags = flags;
    } else {
      this.flags = 0;
    }

    this.decMul = 0.0;
    this.highLowMul = 0.0;

    this.validateFlags();

    // Handle round up, round down
    let steps = (1 << this.bitCount);

    let range = 0.0;
    if ((this.flags & Flag.ROUNDDOWN) !== 0) {
      range = this.high - this.low;
      this.offset = (range / steps);
      this.high -= this.offset;
    } else if ((this.flags & Flag.ROUNDUP) !== 0) {
      range = this.high - this.low;
      this.offset = (range / steps);
      this.low += this.offset;
    }

    // Handle integer encoding flag
    if ((this.flags & Flag.ENCODE_INTS) !== 0) {
      let delta = this.high - this.low;
      if (delta < 1) {
        delta = 1;
      }

      const deltaLog2 = Math.ceil(Math.log2(delta));
      const range2 = (1 << deltaLog2);
      let bc = this.bitCount;

      for (;;) {
        if ((1 << bc) > range2) {
          break;
        } else {
          bc++;
        }
      }

      if (bc > this.bitCount) {
        this.bitCount = bc;
        steps = (1 << this.bitCount);
      }

      this.offset = range2 / steps;
      this.high = this.low + range2 - this.offset;
    }

    this.assignMultipliers(steps);

    // Remove unneccesary flags
    if ((this.flags & Flag.ROUNDDOWN) !== 0) {
      if (this.quantize(this.low) === this.low) {
        this.flags &= ~Flag.ROUNDDOWN;
      }
    }

    if ((this.flags & Flag.ROUNDUP) !== 0) {
      if (this.quantize(this.high) === this.high) {
        this.flags &= ~Flag.ROUNDUP;
      }
    }

    if ((this.flags & Flag.ENCODE_ZERO) !== 0) {
      if (this.quantize(0.0) === 0.0) {
        this.flags &= ~Flag.ENCODE_ZERO;
      }
    }
  }

  // Validates / recomputes decoder flags
  validateFlags() {
    if (this.flags === 0) {
      return;
    }

    // Discard zero flag when encoding min / max set to 0
    if (
      (this.low === 0.0 && (this.flags & Flag.ROUNDDOWN) !== 0)
      || (this.high === 0.0 && (this.flags & Flag.ROUNDUP) !== 0)
    ) {
      this.flags &= ~Flag.ENCODE_ZERO;
    }

    // If min / max is zero when encoding zero, switch to round up / round down instead
    if (this.low === 0.0 && (this.flags & Flag.ENCODE_ZERO) !== 0) {
      this.flags |= Flag.ROUNDDOWN;
      this.flags &= ~Flag.ENCODE_ZERO;
    }

    if (this.high === 0.0 && (this.flags & Flag.ENCODE_ZERO) !== 0) {
      this.flags |= Flag.ROUNDUP;
      this.flags &= ~Flag.ENCODE_ZERO;
    }

    // Check if the range spans zero
    if (this.low > 0.0 || this.high < 0.0) {
      this.flags &= ~Flag.ENCODE_ZERO;
    }

    // If we are left with encode zero, only leave integer flag
    if ((this.flags & Flag.ENCODE_INTS) !== 0) {
      this.flags &= ~(Flag.ROUNDUP | Flag.ROUNDDOWN | Flag.ENCODE_ZERO);
    }

    // Verify that we do not have roundup / rounddown set
    if ((this.flags & (Flag.ROUNDDOWN | Flag.ROUNDUP)) === (Flag.ROUNDDOWN | Flag.ROUNDUP)) {
      throw new Error('roundup / rounddown flags are mutually exclusive');
    }
  }

  assignMultipliers(steps) {
    const range = this.high - this.low;

    let high = 0;
    if (this.bitCount === 32) {
      high = 0xFFFFFFFE;
    } else {
      high = (1 << this.bitCount) - 1;
    }

    let highMul = 0.0;
    if (Math.abs(range) <= 0.0) {
      highMul = high;
    } else {
      highMul = high / range;
    }

    // Adjust precision
    if ((highMul * range) > high || (highMul * range) > high) {
      const multipliers = [0.9999, 0.99, 0.9, 0.8, 0.7];

      for (const mult of multipliers) {
        highMul = (high / range) * mult;
        if ((highMul * range > high) || (highMul * range) > high) {
          continue;
        }
        break;
      }
    }

    this.highLowMul = highMul;
    this.decMul = 1.0 / (steps - 1);

    if (this.highLowMul === 0.0) {
      throw new Error('error computing high / low multiplier');
    }
  }

  quantize(val) {
    if (val < this.low) {
      if ((this.flags & Flag.ROUNDUP) === 0) {
        throw new Error('field tried to quantize an out of range value');
      }
      return this.low;
    }
    if (val > this.high) {
      if ((this.flags & Flag.ROUNDDOWN) === 0) {
        throw new Error('field tried to quantize an out of range value');
      }
      return this.high;
    }

    const i = (val - this.low) * this.highLowMul | 0;
    return this.low + (this.high - this.low) * i * this.decMul;
  }
}

export default QuantizedFloatDecoder;
export { Flag as QuantizedFloatFlag };
