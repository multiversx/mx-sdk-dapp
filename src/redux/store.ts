import { configureStore } from '@reduxjs/toolkit';

import { Reducer } from 'redux';

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

import loginSessionMiddleware from './middlewares/loginSessionMiddleware';
import rootReducer from './reducers';

let localStorageReducers: Partial<Reducer> = rootReducer;

//This allows for this library to be used on other platforms than web, like React Native
//without this condition, redux-persist 6+ will throw an error if persist storage fails
if (typeof window !== 'undefined' && window?.localStorage != null) {
  const storage = require('redux-persist/lib/storage').default;
  const persistConfig = {
    key: 'dapp-core-store',
    version: 1,
    storage,
    whitelist: ['account', 'loginInfo', 'toasts', 'modals']
  };
  localStorageReducers = persistReducer(persistConfig, rootReducer);
}

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
          'accountInfoSlice/setAccount',
          'accountInfoSlice/setAccountNonce',
          'extraActionsSlice/initializeExtraActions'
        ],
        ignoredPaths: [
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
