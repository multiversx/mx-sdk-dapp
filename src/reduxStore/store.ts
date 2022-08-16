import { configureStore } from '@reduxjs/toolkit';
import {
  createSubscription,
  Subscription
} from 'react-redux/es/utils/Subscription';
import { setAccount, setAccountNonce } from 'reduxStore/slices';
import { loginSessionMiddleware } from './middlewares/loginSessionMiddleware';
import { persistIgnoredActions, persistStore, reducers } from './persistConfig';
import rootReducer from './reducers';
import { Store } from 'redux';
import { Persistor } from 'redux-persist/es/types';

let store: Store;
export const getStore = () => {
  store =
    store ??
    configureStore({
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

  return store;
};

let subscription: Subscription;
export const getSubscription = () => {
  subscription = subscription ?? createSubscription(getStore());
  return subscription;
};

let persistor: Persistor;
export const getPersistor = () => {
  persistor = persistor ?? persistStore(getStore());
  return persistor;
};

// Used only to infer the store type
const fakeStore = configureStore({ reducer: rootReducer });
// Infer the `RootState` and `AppDispatch` types from the store itself
export type StoreType = typeof fakeStore;
export type RootState = ReturnType<ReturnType<typeof fakeStore.getState>>;
export type AppDispatch = typeof store.dispatch;
