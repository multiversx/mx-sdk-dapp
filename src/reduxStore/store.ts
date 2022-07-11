import { configureStore } from '@reduxjs/toolkit';
import { createSubscription } from 'react-redux/es/utils/Subscription';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';

import { setAccount, setAccountNonce } from 'reduxStore/slices';
import { loginSessionMiddleware } from './middlewares/loginSessionMiddleware';

//this will make sure that when importing store in the app,
// in non-browser envs there will be no warnings/errors caused by redux-persist
const reducers =
  typeof sessionStorage !== 'undefined'
    ? require('./persistedRootReducer').default
    : require('./rootReducer').default;

export const store = configureStore({
  reducer: reducers,
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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
