import { combineReducers } from '@reduxjs/toolkit';

import { ReducersEnum } from 'types/reducers.types';
import account from './slices/accountInfoSlice';
import dappModal from './slices/dappModalsSlice';
import loginInfo from './slices/loginInfoSlice';
import modals from './slices/modalsSlice';
import networkConfig from './slices/networkConfigSlice';
import { signedMessageInfoReducer } from './slices/signedMessageInfoSlice';
import toasts from './slices/toastsSlice';
import transactionsInfo from './slices/transactionsInfoSlice';
import transactions from './slices/transactionsSlice';
import batchTransactions from './slices/batchTransactionsSlice';
import batchTransactionsInfo from './slices/batchTransactionsInfoSlice';

const reducers = {
  [ReducersEnum.account]: account,
  [ReducersEnum.dappModal]: dappModal,
  [ReducersEnum.loginInfo]: loginInfo,
  [ReducersEnum.modals]: modals,
  [ReducersEnum.networkConfig]: networkConfig,
  [ReducersEnum.signedMessageInfo]: signedMessageInfoReducer,
  [ReducersEnum.toasts]: toasts,
  [ReducersEnum.transactionsInfo]: transactionsInfo,
  [ReducersEnum.transactions]: transactions,
  [ReducersEnum.batchTransactions]: batchTransactions,
  [ReducersEnum.batchTransactionsInfo]: batchTransactionsInfo
};

const getRootReducer = (customReducers = {}) =>
  combineReducers({ ...reducers, ...customReducers });

export default getRootReducer;
