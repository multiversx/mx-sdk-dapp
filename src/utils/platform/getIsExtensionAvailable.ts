import { safeWindow } from 'lib/sdkDappUtils';

export const getIsExtensionAvailable = () => {
  return Boolean(safeWindow?.elrondWallet);
};
