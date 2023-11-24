export const getIsOperaWalletAvailable = () => {
  const safeWindow = typeof window !== 'undefined' ? (window as any) : {};
  return Boolean(safeWindow.isOpera && safeWindow.elrond);
};
