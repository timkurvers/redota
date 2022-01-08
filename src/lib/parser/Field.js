/* eslint-disable default-case, key-spacing, no-multi-spaces, no-param-reassign */

import { getOwnProperty } from '../utils/index.js';

import FieldState from './FieldState.js';
import {
  booleanDecoder,
  findDecoder,
  findDecoderByBaseType,
  unsignedDecoder,
} from './FieldDecoder.js';

const FieldModel = {
  SIMPLE:         0,
  FIXED_ARRAY:    1,
  FIXED_TABLE:    2,
  VARIABLE_ARRAY: 3,
  VARIABLE_TABLE: 4,
};

const POINTER_TYPES = {
  CBodyComponent:             true,
  CDOTAGameManager:           true,
  CDOTAGamerules:             true,
  CDOTASpectatorGraphManager: true,
  CEntityIdentity:            true,
  CPhysicsComponent:          true,
  CPlayer_CameraServices:     true,
  CPlayerLocalData:           true,
  CRenderComponent:           true,
  PhysicsRagdollPose_t:       true,
};

// See: https://github.com/dotabuff/manta/blob/master/field.go
class Field {
  constructor() {
    this.parentName = null;
    this.varName = null;
    this.varType = null;
    this.sendNode = null;
    this.serializerName = null;
    this.serializerVersion = null;
    this.encoder = null;
    this.encodeFlags = null;
    this.bitCount = null;
    this.lowValue = null;
    this.highValue = null;
    this.fieldType = null;
    this.serializer = null;
    this.value = null;
    this._model = FieldModel.SIMPLE;

    this.decoder = null;
    this.baseDecoder = null;
    this.childDecoder = null;
  }

  get isPointerType() {
    return POINTER_TYPES[this.fieldType.baseType];
  }

  get model() {
    return this._model;
  }

  set model(model) {
    this._model = model;
    switch (model) {
      case FieldModel.FIXED_ARRAY:
        this.decoder = findDecoder(this);
        break;
      case FieldModel.FIXED_TABLE:
        this.baseDecoder = booleanDecoder;
        break;
      case FieldModel.VARIABLE_ARRAY: {
        const { genericType } = this.fieldType;
        if (!genericType) {
          throw new Error(`no generic type for variable array field: ${this}`);
        }
        this.baseDecoder = unsignedDecoder;
        this.childDecoder = findDecoderByBaseType(genericType.baseType);
      } break;
      case FieldModel.VARIABLE_TABLE:
        this.baseDecoder = unsignedDecoder;
        break;
      case FieldModel.SIMPLE:
        this.decoder = findDecoder(this);
        break;
    }
  }

  getDecoderForFieldPath(fp, pos) {
    switch (this.model) {
      case FieldModel.FIXED_ARRAY:
        return this.decoder;
      case FieldModel.FIXED_TABLE:
        if (fp.last === pos - 1) {
          return this.baseDecoder;
        }
        return this.serializer.getDecoderForFieldPath(fp, pos);
      case FieldModel.VARIABLE_ARRAY:
        if (fp.last === pos) {
          return this.childDecoder;
        }
        return this.baseDecoder;
      case FieldModel.VARIABLE_TABLE:
        if (fp.last >= pos + 1) {
          return this.serializer.getDecoderForFieldPath(fp, pos + 1);
        }
        return this.baseDecoder;
    }
    return this.decoder;
  }

  getFieldForFieldPath(fp, pos) {
    switch (this.model) {
      case FieldModel.FIXED_ARRAY:
        return this;
      case FieldModel.FIXED_TABLE:
        if (fp.last !== pos - 1) {
          return this.serializer.getFieldForFieldPath(fp, pos);
        }
        break;
      case FieldModel.VARIABLE_ARRAY:
        return this;
      case FieldModel.VARIABLE_TABLE:
        if (fp.last >= pos + 1) {
          return this.serializer.getFieldForFieldPath(fp, pos + 1);
        }
        break;
    }
    return this;
  }

  // TODO: Mutates fp argument
  getFieldPathForName(fp, name) {
    switch (this.model) {
      case FieldModel.FIXED_ARRAY:
      case FieldModel.VARIABLE_ARRAY:
        fp.path[fp.last] = +name;
        return true;
      case FieldModel.FIXED_TABLE:
        return this.serializer.getFieldPathForName(fp, name);
      case FieldModel.VARIABLE_TABLE:
        fp.path[fp.last] = +name.slice(0, 4);
        fp.last++;
        return this.serializer.getFieldPathForName(fp, name.slice(5));
      case FieldModel.SIMPLE:
        throw new Error('not supported');
    }
    return false;
  }

  // TODO: Mutates fp argument
  getFieldPaths(fp, state) {
    const fps = [];
    switch (this.model) {
      case FieldModel.FIXED_ARRAY:
      case FieldModel.VARIABLE_ARRAY: {
        const sub = state.get(fp);
        if (sub instanceof FieldState) {
          fp.last++;
          for (const [index, value] of sub.state.entries()) {
            if (value !== null) {
              fp.path[fp.last] = index;
              fps.push(fp.copy());
            }
          }
          fp.last--;
        }
      } break;
      case FieldModel.FIXED_TABLE: {
        const sub = state.get(fp);
        if (sub instanceof FieldState) {
          fp.last++;
          fps.push(...this.serializer.getFieldPaths(fp, sub));
          fp.last--;
        }
      } break;
      case FieldModel.VARIABLE_TABLE: {
        const sub = state.get(fp);
        if (sub instanceof FieldState) {
          fp.last += 2;
          for (const [index, value] of sub.state.entries()) {
            if (value instanceof FieldState) {
              fp.path[fp.last - 1] = index;
              fps.push(...this.serializer.getFieldPaths(fp, value));
            }
          }
          fp.last -= 2;
        }
      } break;
      case FieldModel.SIMPLE:
        fps.push(fp.copy());
        break;
    }
    return fps;
  }

  getNameForFieldPath(fp, pos) {
    const parts = [this.varName];
    switch (this.model) {
      case FieldModel.FIXED_ARRAY:
        if (fp.last === pos) {
          parts.push(`${fp.path[pos]}`.padStart(4, '0'));
        }
        break;
      case FieldModel.FIXED_TABLE:
        if (fp.last >= pos) {
          parts.push(...this.serializer.getNameForFieldPath(fp, pos));
        }
        break;
      case FieldModel.VARIABLE_ARRAY:
        if (fp.last === pos) {
          parts.push(`${fp.path[pos]}`.padStart(4, '0'));
        }
        break;
      case FieldModel.VARIABLE_TABLE:
        if (fp.last !== pos - 1) {
          parts.push(`${fp.path[pos]}`.padStart(4, '0'));
          if (fp.last !== pos) {
            parts.push(...this.serializer.getNameForFieldPath(fp, pos + 1));
          }
        }
    }
    return parts;
  }

  getTypeForFieldPath(fp, pos) {
    switch (this.model) {
      case FieldModel.FIXED_ARRAY:
        return this.fieldType;
      case FieldModel.FIXED_TABLE:
        if (fp.last !== pos - 1) {
          return this.serializer.getTypeForFieldPath(fp, pos);
        }
        break;
      case FieldModel.VARIABLE_ARRAY:
        if (fp.last === pos) {
          return this.fieldType.genericType;
        }
        break;
      case FieldModel.VARIABLE_TABLE:
        if (fp.last >= pos + 1) {
          return this.serializer.getTypeForFieldPath(fp, pos + 1);
        }
        break;
    }
    return this.fieldType;
  }

  static for(symbols, defs) {
    const resolve = (prop) => {
      const ref = getOwnProperty(defs, prop);
      return symbols[ref];
    };

    const field = new Field();
    field.varName           = resolve('varNameSym');
    field.varType           = resolve('varTypeSym');
    field.sendNode          = resolve('sendNodeSym');
    field.serializerName    = resolve('fieldSerializerNameSym');
    field.serializerVersion = defs.fieldSerializerVersion || 0;
    field.encoder           = resolve('varEncoderSym');
    field.encodeFlags       = defs.encodeFlags;
    field.bitCount          = defs.bitCount;
    field.lowValue          = defs.lowValue;
    field.highValue         = defs.highValue;

    // TODO: Root sendNode override?

    return field;
  }
}

export default Field;
export { FieldModel };
