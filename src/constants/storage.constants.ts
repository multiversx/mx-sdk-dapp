import { createJSONStorage } from 'zustand/middleware';
import { SubscriptionsEnum } from 'types/subscriptions.type';
import { safeWindow } from './window.constants';

export const persistConfig: {
  persistReducersStorageType: 'localStorage' | 'sessionStorage';
} = {
  persistReducersStorageType: 'localStorage'
};

export const storage = safeWindow
  ? createJSONStorage(
      () => safeWindow[persistConfig.persistReducersStorageType]
    )
  : undefined;

export const subscriptions = new Map<SubscriptionsEnum, () => void>();

export const REHYDRATE_STORE_TIMEOUT = 3000; // 3 seconds
