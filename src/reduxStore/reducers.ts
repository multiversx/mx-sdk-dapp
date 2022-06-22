import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import sessionStorage from 'redux-persist/lib/storage/session';
import { ReducersEnum } from 'types/reducers';
import account from './slices/accountInfoSlice';
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
  blacklist: [ReducersEnum.transactionsToSign]
};

const reducers = {
  [ReducersEnum.account]: account,
  [ReducersEnum.networkConfig]: networkConfig,
  [ReducersEnum.loginInfo]: loginInfo,
  [ReducersEnum.modals]: modals,
  [ReducersEnum.transactions]: persistReducer(
    transactionsReducerPersistConfig,
    transactions
  ),
  [ReducersEnum.transactionsInfo]: persistReducer(
    transactionsInfoPersistConfig,
    transactionsInfo
  )
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
