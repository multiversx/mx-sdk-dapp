export const getIsOperaWalletAvailable = () => {
  return Boolean(window?.isOpera && window?.elrond);
};
