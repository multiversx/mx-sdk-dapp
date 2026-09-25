import {
  createJSONStorage,
  devtools,
  persist,
  PersistStorage
} from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createStore } from 'zustand/vanilla';
import { applyMiddlewares } from './middleware';
import { accountSlice } from './slices/account';
import { cacheSlice } from './slices/cache';
import { configSlice } from './slices/config';
import { loginInfoSlice } from './slices/loginInfo';
import { networkSlice } from './slices/network';
import { toastSlice } from './slices/toast';
import { transactionsSlice } from './slices/transactions';
import { uiSlice } from './slices/ui';
import {
  InMemoryStorage,
  defaultStorageCallback,
  StorageCallback
} from './storage';
import { StoreType } from './store.types';

export type MutatorsIn = [
  ['zustand/devtools', never],
  ['zustand/persist', unknown],
  ['zustand/immer', never]
];

export type MutatorsOut = [
  ['zustand/devtools', never],
  ['zustand/persist', StoreType],
  ['zustand/immer', never]
];

const getIsDevelopment = () => {
  try {
    return process.env.NODE_ENV === 'development';
  } catch {
    return false;
  }
};

const logWriteError = (error: unknown) =>
  console.error('Unable to persist the sdk-dapp store:', error);

// a failed write (e.g. a full storage quota) must not abort the state update
const withSafeWrites = <S>(
  storage?: PersistStorage<S>
): PersistStorage<S> | undefined =>
  storage && {
    ...storage,
    setItem: (name, value) => {
      try {
        return Promise.resolve(storage.setItem(name, value)).catch(
          logWriteError
        );
      } catch (error) {
        logWriteError(error);
      }
    }
  };

export const createDAppStore = (getStorageCallback: StorageCallback) => {
  const store = createStore<StoreType, MutatorsOut>(
    devtools(
      persist(
        immer((...args) => ({
          network: networkSlice(...args),
          account: accountSlice(...args),
          loginInfo: loginInfoSlice(...args),
          config: configSlice(...args),
          transactions: transactionsSlice(...args),
          toasts: toastSlice(...args),
          cache: cacheSlice(...args),
          ui: uiSlice(...args)
        })),
        {
          name: 'sdk-dapp-store',
          storage: withSafeWrites(createJSONStorage(getStorageCallback)),
          partialize: (state) =>
            state.config?.flags?.persistTokenLogin === false
              ? {
                  ...state,
                  loginInfo: { ...state.loginInfo, tokenLogin: null }
                }
              : state
        }
      ),
      {
        name: 'sdk-dapp',
        enabled: getIsDevelopment()
      }
    )
  );
  store.subscribe(applyMiddlewares);
  return store;
};

export type StoreApi = ReturnType<typeof createDAppStore>;

let store: StoreApi;

export const setDAppStore = (_store: StoreApi) => {
  store = _store;
};

export const getStore = () => {
  if (!store) {
    setDAppStore(createDAppStore(() => new InMemoryStorage()));
  }
  return store;
};

/**
 * Initialize store with the preferred storage by passing a callback.
 * Default storage is localStorage.
 * You can pass your own storage.
 * Call this function before using store, ideally before app bootstrapping.
 * @param getStorageCallback
 * @default () => localStorage
 * @returns persistent store instance
 * @example
 * initStore(() => window.localStorage);
 * initStore(() => window.sessionStorage);
 * initStore(() => new InMemoryStorage());
 * */
export const initStore = (getStorageCallback = defaultStorageCallback) => {
  const dappStore = createDAppStore(getStorageCallback);
  setDAppStore(dappStore);
  return dappStore;
};

export const getState = () => getStore().getState();
