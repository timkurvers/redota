export const DOTA_MAP_SIZE = 16384;
export const REDOTA_MAP_SIZE = 4000;

export const scale = (value) => (REDOTA_MAP_SIZE / DOTA_MAP_SIZE) * value;
