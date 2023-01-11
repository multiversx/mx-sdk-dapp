import { configureStore } from '@reduxjs/toolkit';
import { createSubscription } from 'react-redux/lib/utils/Subscription';
import { setAccount, setAccountNonce } from 'reduxStore/slices';
import { loginSessionMiddleware } from './middlewares/loginSessionMiddleware';
import { persistIgnoredActions, persistStore, reducers } from './persistConfig';
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
          // TODO: check regex for: account.accounts[erd1regex].nonce
          'account.account.nonce',
          'providers.accountProvider'
        ]
      }
    }).concat(loginSessionMiddleware)
});

export const subscription = createSubscription(store);

export const persistor = persistStore(store);

// Used only to infer the store type
const fakeStore = configureStore({ reducer: rootReducer });
// Infer the `RootState` and `AppDispatch` types from the store itself
export type StoreType = typeof fakeStore;
export type RootState = ReturnType<ReturnType<typeof fakeStore.getState>>;
export type AppDispatch = typeof store.dispatch;
