import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';
import { serializableCheck } from './serializableCheck';

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
    getDefaultMiddleware({ serializableCheck })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
