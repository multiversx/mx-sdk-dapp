import { configureStore } from '@reduxjs/toolkit';
import { createContext } from 'react';
import {
  createDispatchHook,
  createSelectorHook,
  createStoreHook
} from 'react-redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['account', 'loginInfo', 'toasts', 'transactionsInfo', 'modals']
};

const localStorageReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: localStorageReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          'appConfig/setProvider',
          'accountInfoSlice/setAccount',
          'accountInfoSlice/setAccountNonce'
        ],
        ignoredPaths: [
          'networkConfig.proxy',
          'networkConfig.apiProvider',
          'networkConfig.provider',
          'payload.nonce',
          'account.account.nonce'
        ]
      }
    })
});

export const defaultContextValue: any = null;
export const DappCoreContext = createContext(defaultContextValue);

export const useStore = createStoreHook(DappCoreContext);
export const useDispatch = createDispatchHook(DappCoreContext);
export const useSelector = createSelectorHook(DappCoreContext);

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
