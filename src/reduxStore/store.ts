import { configureStore } from '@reduxjs/toolkit';
import { createSubscription } from 'react-redux/es/utils/Subscription';

import { setAccount, setAccountNonce } from 'reduxStore/slices';
import { loginSessionMiddleware } from './middlewares/loginSessionMiddleware';
import {
  persistStore,
  reducers,
  persistIgnoredActions
} from './webPersistConfig';
import rootReducer from './reducers';

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          ...persistIgnoredActions,
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

const storeType = configureStore({ reducer: rootReducer });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type StoreType = typeof storeType;
export type RootState = ReturnType<ReturnType<typeof storeType.getState>>;
export type AppDispatch = typeof store.dispatch;
