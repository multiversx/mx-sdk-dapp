export const getIsExtensionAvailable = () => {
  const safeWindow = typeof window !== 'undefined' ? (window as any) : {};
  return Boolean(safeWindow.elrondWallet);
};
