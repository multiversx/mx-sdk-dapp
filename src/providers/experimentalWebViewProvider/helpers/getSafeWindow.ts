export const getSafeWindow = () => {
  return typeof window !== 'undefined' ? window : ({} as any);
};
