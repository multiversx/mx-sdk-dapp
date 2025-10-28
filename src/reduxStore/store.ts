import { configureStore, Store } from '@reduxjs/toolkit';
import { createSubscription } from 'react-redux/lib/utils/Subscription';
import { setAccount, setAccountNonce } from 'reduxStore/slices';
import { loginSessionMiddleware } from './middlewares/loginSessionMiddleware';
import { persistIgnoredActions, persistStore, reducers } from './persistConfig';

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
          // TODO: check regex for: account.accounts[erd1regex].nonce
          'account.account.nonce',
          'providers.accountProvider'
        ]
      }
    }).concat(loginSessionMiddleware)
});

export const subscription = createSubscription(store);
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type StoreType = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
