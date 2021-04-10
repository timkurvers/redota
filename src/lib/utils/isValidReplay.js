const MAGIC_SOURCE_2 = 'PBDEMS2\0';

export default async (blob) => {
  const { length } = MAGIC_SOURCE_2;
  if (blob.size < length) {
    return false;
  }
  const magic = await blob.slice(0, MAGIC_SOURCE_2.length).text();
  return magic === MAGIC_SOURCE_2;
};
