// See: https://github.com/skadistats/clarity/blob/master/src/main/java/skadistats/clarity/model/engine/AbstractEngineType.java

export const INDEX_BITS = 14;
export const SERIAL_BITS = 17;
export const INDEX_MASK = (1 << INDEX_BITS) - 1;
export const EMPTY_HANDLE = (1 << (INDEX_BITS + 10)) - 1;

export const indexForHandle = (handle) => handle & INDEX_MASK;
export const serialForHandle = (handle) => handle >> INDEX_BITS;
export const handleForIndexAndSerial = (index, serial) => (
  (serial << INDEX_BITS) | index
);
