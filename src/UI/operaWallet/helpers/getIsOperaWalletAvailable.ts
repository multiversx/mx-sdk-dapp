import { safeWindow } from 'lib/sdkDappUtils';

export const getIsOperaWalletAvailable = () => {
  return Boolean(safeWindow?.isOpera && safeWindow?.elrond);
};
