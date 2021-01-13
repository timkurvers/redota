const MAGIC_SOURCE_2 = 'PBDEMS2\0';

export default async (file) => {
  const { length } = MAGIC_SOURCE_2;
  if (file.size < length) {
    return false;
  }
  const magic = await file.slice(0, MAGIC_SOURCE_2.length).text();
  return magic === MAGIC_SOURCE_2;
};
