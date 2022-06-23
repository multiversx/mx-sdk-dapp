import { configureStore } from '@reduxjs/toolkit';
import { createSubscription } from 'react-redux/es/utils/Subscription';

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
import { defaultNetwork, setAccount, setAccountNonce } from 'reduxStore/slices';
import loginSessionMiddleware from './middlewares/loginSessionMiddleware';
import rootReducer from './reducers';
import { PersistConfig } from 'redux-persist/es/types';
import { ReducersEnum } from 'types/reducers';

const migrations: any = {
  2: (state: PersistedRootState) => {
    return {
      ...state,
      networkConfig: defaultNetwork
    };
  }
};

const persistConfig: PersistConfig<any> = {
  key: 'dapp-core-store',
  version: 2,
  storage,
  whitelist: [
    ReducersEnum.account,
    ReducersEnum.loginInfo,
    ReducersEnum.modals,
    ReducersEnum.networkConfig
  ],
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
          setAccountNonce.type,
          setAccount.type
        ],
        ignoredPaths: [
          'payload.nonce',
          'account.account.nonce',
          'providers.accountProvider'
        ]
      }
    }).concat(loginSessionMiddleware)
});

export const subscription = createSubscription(store);

export const persistor = persistStore(store);

type PersistedRootState = ReturnType<typeof store.getState>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
