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
  REGISTER,
  createMigrate
} from 'redux-persist';

import { defaultNetwork } from 'redux/slices';
import loginSessionMiddleware from './middlewares/loginSessionMiddleware';
import rootReducer from './reducers';

let localStorageReducers: Partial<Reducer> = rootReducer;

const migrations = {
  2: (state: PestistedRootState) => {
    return {
      ...state,
      networkConfig: defaultNetwork
    };
  }
};

//This allows for this library to be used on other platforms than web, like React Native
//without this condition, redux-persist 6+ will throw an error if persist storage fails
if (typeof window !== 'undefined' && window?.localStorage != null) {
  const storage = require('redux-persist/lib/storage').default;
  const persistConfig = {
    key: 'dapp-core-store',
    version: 2,
    storage,
    whitelist: ['account', 'loginInfo', 'toasts', 'modals', 'networkConfig'],
    migrate: createMigrate(migrations, { debug: false })
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

const storeType = configureStore({ reducer: rootReducer });
type PestistedRootState = ReturnType<typeof store.getState>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type StoreType = typeof storeType;
export type RootState = ReturnType<typeof storeType.getState>;
export type AppDispatch = typeof store.dispatch;
