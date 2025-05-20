import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createStore } from 'zustand/vanilla';
import { applyMiddlewares } from './middleware';
import {
  networkSlice,
  accountSlice,
  loginInfoSlice,
  configSlice,
  toastSlice,
  cacheSlice,
  uiSlice
} from './slices';
import { transactionsSlice } from './slices/transactions';
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
          storage: createJSONStorage(getStorageCallback)
        }
      )
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
  return setDAppStore(createDAppStore(getStorageCallback));
};

export const getState = () => getStore().getState();
