import { configureStore } from '@reduxjs/toolkit';

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

import loginSessionMiddleware from './middlewares/loginSessionMiddleware';
import rootReducer from './reducers';

const persistConfig = {
  key: 'dapp-core-store',
  version: 1,
  storage,
  whitelist: ['account', 'loginInfo', 'toasts', 'modals']
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
          'accountInfoSlice/setAccountNonce',
          'extraActionsSlice/initializeExtraActions'
        ],
        ignoredPaths: [
          'networkConfig.proxy',
          'networkConfig.apiProvider',
          'networkConfig.provider',
          'payload.nonce',
          'account.account.nonce',
          // extra actions
          'extraActions.log',
          'payload.log',
          'payload.onLogin',

          'extraActions.getProvider',
          'extraActions.init'
        ]
      }
    }).concat(loginSessionMiddleware)
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type StoreType = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
