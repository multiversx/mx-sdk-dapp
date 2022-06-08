import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import account from './slices/accountInfoSlice';
import loginInfo from './slices/loginInfoSlice';
import modals from './slices/modalsSlice';
import networkConfig from './slices/networkConfigSlice';
import transactionsInfo from './slices/transactionsInfoSlice';
import transactions from './slices/transactionsSlice';
import awesomeModals from './slices/awesomeModalsSlice';

const reducers = {
  account,
  networkConfig,
  loginInfo,
  modals,
  transactions,
  transactionsInfo,
  awesomeModals
};

if (typeof window !== 'undefined' && window.localStorage != null) {
  //This allows for this library to be used on other platforms than web, like React Native
  //without this condition, redux-persist 6+ will throw an error if persist storage fails
  const sessionStorage = require('redux-persist/lib/storage/session').default;

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
  reducers.transactions = persistReducer(
    transactionsReducer,
    transactions
  ) as any;
  reducers.transactionsInfo = persistReducer(
    transactionsInfoPersistConfig,
    transactionsInfo
  ) as any;
  //#endregion
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
