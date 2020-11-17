/* eslint-disable default-case, key-spacing */

import QuantizedFloatDecoder, { QuantizedFloatFlag } from './QuantizedFloatDecoder.js';

// See: https://github.com/dotabuff/manta/blob/master/field_decoder.go

const vectorNormalDecoder = (reader) => reader.read3BitNormal();
const fixed64Decoder = (reader) => reader.readUint64LE();
const booleanDecoder = (reader) => reader.readBitFlag();
const stringDecoder = (reader) => reader.readString();
const defaultDecoder = (reader) => reader.readVarUint32();
const signedDecoder = (reader) => reader.readVarInt32();
const floatCoordDecoder = (reader) => reader.readCoord();
const noscaleDecoder = (reader) => reader.readBitFloat(32);
const runeTimeDecoder = (reader) => reader.readBitFloat(4);
const simulationTimeDecoder = (reader) => reader.readVarUint32() * (1.0 / 30);
const unsignedDecoder = (reader) => reader.readVarUint32();
const unsigned64Decoder = (reader) => reader.readVarUint64();
const componentDecoder = (reader) => reader.readBitInt(1);

const unsignedFactory = () => unsignedDecoder;

const unsigned64Factory = (field) => {
  switch (field.encoder) {
    case 'fixed64':
      return fixed64Decoder;
  }
  return unsigned64Decoder;
};

const quantizedFactory = (field) => {
  const qfd = new QuantizedFloatDecoder(
    field.bitCount,
    field.encodeFlags,
    field.lowValue,
    field.highValue,
  );
  return (reader) => {
    if ((qfd.flags & QuantizedFloatFlag.ROUNDDOWN) !== 0 && reader.readBitFlag()) {
      return qfd.low;
    }
    if ((qfd.flags & QuantizedFloatFlag.ROUNDUP) !== 0 && reader.readBitFlag()) {
      return qfd.high;
    }
    if ((qfd.flags & QuantizedFloatFlag.ENCODE_ZERO) !== 0 && reader.readBitFlag()) {
      return 0.0;
    }
    return qfd.low + (qfd.high - qfd.low) * reader.readBitInt(qfd.bitCount) * qfd.decMul;
  };
};

const floatFactory = (field) => {
  switch (field.encoder) {
    case 'coord':
      return floatCoordDecoder;
    case 'simtime':
      return simulationTimeDecoder;
    case 'runetime':
      return runeTimeDecoder;
  }

  const { bitCount } = field;
  if (bitCount === null || (bitCount <= 0 || bitCount >= 32)) {
    return noscaleDecoder;
  }
  return quantizedFactory(field);
};

const vectorFactory = (n) => (field) => {
  if (n === 3 && field.encoder === 'normal') {
    return vectorNormalDecoder;
  }

  const ff = floatFactory(field);
  return (reader) => {
    const vec = new Array(n);
    for (let i = 0; i < n; ++i) {
      vec[i] = ff(reader);
    }
    return vec;
  };
};

const qangleFactory = (field) => {
  const { bitCount } = field;
  if (field.encoder === 'qangle_pitch_yaw') {
    const n = bitCount;
    return (reader) => [
      reader.readAngle(n), reader.readAngle(n), 0.0,
    ];
  }

  if (bitCount !== null && bitCount !== 0) {
    const n = bitCount;
    return (reader) => [
      reader.readAngle(n), reader.readAngle(n), reader.readAngle(n),
    ];
  }

  return (reader) => {
    const ret = new Array(3);
    const rX = reader.readBitFlag();
    const rY = reader.readBitFlag();
    const rZ = reader.readBitFlag();
    if (rX) {
      ret[0] = reader.readCoord();
    }
    if (rY) {
      ret[1] = reader.readCoord();
    }
    if (rZ) {
      ret[2] = reader.readCoord();
    }
    return ret;
  };
};

const FIELD_TYPE_FACTORIES = {
  float32:                  floatFactory,
  CNetworkedQuantizedFloat: quantizedFactory,
  Vector:                   vectorFactory(3),
  Vector2D:                 vectorFactory(2),
  Vector4D:                 vectorFactory(4),
  uint64:                   unsigned64Factory,
  QAngle:                   qangleFactory,
  CHandle:                  unsignedFactory,
  CStrongHandle:            unsigned64Factory,
  CEntityHandle:            unsignedFactory,
};

const FIELD_TYPE_DECODERS = {
  bool:    booleanDecoder,
  char:    stringDecoder,
  color32: unsignedDecoder,
  int16:   signedDecoder,
  int32:   signedDecoder,
  int64:   signedDecoder,
  int8:    signedDecoder,
  uint16:  unsignedDecoder,
  uint32:  unsignedDecoder,
  uint8:   unsignedDecoder,

  CBodyComponent:       componentDecoder,
  CGameSceneNodeHandle: unsignedDecoder,
  Color:                unsignedDecoder,
  CPhysicsComponent:    componentDecoder,
  CRenderComponent:     componentDecoder,
  CUtlString:           stringDecoder,
  CUtlStringToken:      unsignedDecoder,
  CUtlSymbolLarge:      stringDecoder,
};

export const findDecoder = (field) => {
  const { baseType } = field.fieldType;
  const factory = FIELD_TYPE_FACTORIES[baseType];
  if (factory) {
    return factory(field);
  }
  return FIELD_TYPE_DECODERS[baseType] || defaultDecoder;
};

export const findDecoderByBaseType = (baseType) => (
  FIELD_TYPE_DECODERS[baseType] || defaultDecoder
);

export { booleanDecoder, unsignedDecoder };
