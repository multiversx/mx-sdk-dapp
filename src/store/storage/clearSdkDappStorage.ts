import { SDK_DAPP_STORAGE_PREFIX } from 'constants/storage.constants';
import { safeWindow } from 'constants/window.constants';

const clearPrefixedKeys = (storage?: Storage) => {
  if (!storage) {
    return;
  }

  try {
    const keys: string[] = [];

    for (let index = 0; index < storage.length; index++) {
      const key = storage.key(index);

      if (key?.startsWith(SDK_DAPP_STORAGE_PREFIX)) {
        keys.push(key);
      }
    }

    keys.forEach((key) => storage.removeItem(key));
  } catch (error) {
    console.error('Error clearing sdk-dapp storage:', error);
  }
};

export const clearSdkDappStorage = ({
  clearAllStorage = false
}: { clearAllStorage?: boolean } = {}) => {
  if (clearAllStorage) {
    safeWindow.localStorage?.clear?.();
    safeWindow.sessionStorage?.clear?.();
    return;
  }

  clearPrefixedKeys(safeWindow.localStorage);
  clearPrefixedKeys(safeWindow.sessionStorage);
};
