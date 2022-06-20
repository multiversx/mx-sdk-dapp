import { configureStore } from '@reduxjs/toolkit';

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

import storage from 'redux-persist/lib/storage';
import { defaultNetwork } from 'reduxStore/slices';
import loginSessionMiddleware from './middlewares/loginSessionMiddleware';
import rootReducer from './reducers';

const migrations: any = {
  2: (state: PestistedRootState) => {
    return {
      ...state,
      networkConfig: defaultNetwork
    };
  }
};

const persistConfig: any = {
  key: 'dapp-core-store',
  version: 2,
  storage,
  whitelist: ['account', 'loginInfo', 'toasts', 'modals', 'networkConfig'],
  migrate: createMigrate(migrations, { debug: false })
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
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
          'accountInfoSlice/setAccountNonce'
        ],
        ignoredPaths: ['payload.nonce', 'account.account.nonce']
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
