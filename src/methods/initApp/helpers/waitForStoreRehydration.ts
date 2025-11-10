import { defaultStorageCallback, StorageCallback } from 'store/storage';
import { StoreApi } from 'store/store';
import { REHYDRATE_STORE_TIMEOUT } from '../../../constants';

const REHYDRATE_TIMEOUT_SECONDS = REHYDRATE_STORE_TIMEOUT / 1000;

export async function waitForStoreRehydration({
  store,
  getStorageCallback
}: {
  store: StoreApi;
  getStorageCallback: StorageCallback;
}): Promise<void> {
  // Wait for store rehydration when using async storage (like React Native AsyncStorage)
  // This ensures the store is fully populated before restoreProvider() executes
  if (getStorageCallback !== defaultStorageCallback) {
    try {
      await new Promise<void>((resolve, reject) => {
        if (store.persist.hasHydrated()) {
          resolve();
        }

        store.persist.onFinishHydration(() => {
          resolve();
        });

        setTimeout(() => {
          reject();
        }, REHYDRATE_STORE_TIMEOUT);
      });
    } catch (error: any) {
      console.warn(
        `Store rehydration timed out after ${REHYDRATE_TIMEOUT_SECONDS} seconds. Continuing initialization...`,
        error?.message
      );
    }
  }
}
