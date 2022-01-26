import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import account from './slices/accountInfoSlice';
import loginInfo from './slices/loginInfoSlice';
import modals from './slices/modalsSlice';
import networkConfig from './slices/networkConfigSlice';
import transactionsInfo from './slices/transactionsInfoSlice';
import transactions from './slices/transactionsSlice';

//#region custom reducers
const transactionsInfoPersistConfig = {
  key: 'dapp-core-transactionsInfo',
  version: 1,
  storage: sessionStorage
};
const transactionsReducer = {
  key: 'dapp-core-transactions',
  version: 1,
  storage: sessionStorage,
  blacklist: ['transactionsToSign']
};
const customReducers = {
  transactions: persistReducer(transactionsReducer, transactions),
  transactionsInfo: persistReducer(
    transactionsInfoPersistConfig,
    transactionsInfo
  )
};
//#endregion

const rootReducer = combineReducers({
  ...customReducers,
  account,
  networkConfig,
  loginInfo,
  modals
});

export default rootReducer;
