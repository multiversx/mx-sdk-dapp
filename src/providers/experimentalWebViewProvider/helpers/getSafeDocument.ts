export const getSafeDocument = () => {
  return typeof document !== 'undefined' ? document : ({} as any);
};
