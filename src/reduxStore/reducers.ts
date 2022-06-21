import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import sessionStorage from 'redux-persist/lib/storage/session';
import account from './slices/accountInfoSlice';
import dappModal from './slices/dappModalsSlice';
import loginInfo from './slices/loginInfoSlice';
import modals from './slices/modalsSlice';
import networkConfig from './slices/networkConfigSlice';
import transactionsInfo from './slices/transactionsInfoSlice';
import transactions from './slices/transactionsSlice';

const transactionsInfoPersistConfig = {
  key: 'dapp-core-transactionsInfo',
  version: 1,
  storage: sessionStorage
};
const transactionsReducerPersistConfig = {
  key: 'dapp-core-transactions',
  version: 1,
  storage: sessionStorage,
  blacklist: ['transactionsToSign']
};

const reducers = {
  account,
  networkConfig,
  loginInfo,
  modals,
  dappModal,
  transactions: persistReducer(transactionsReducerPersistConfig, transactions),
  transactionsInfo: persistReducer(
    transactionsInfoPersistConfig,
    transactionsInfo
  )
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
