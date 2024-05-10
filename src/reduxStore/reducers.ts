import { combineReducers } from '@reduxjs/toolkit';

import { ReducersEnum } from 'types/reducers.types';
import account from './slices/accountInfoSlice';
import batchTransactions from './slices/batchTransactionsSlice';
import dappConfig from './slices/dappConfigSlice';
import loginInfo from './slices/loginInfoSlice';
import modals from './slices/modalsSlice';
import { signedMessageInfoReducer } from './slices/signedMessageInfoSlice';
import toasts from './slices/toastsSlice';
import transactionsInfo from './slices/transactionsInfoSlice';
import transactions from './slices/transactionsSlice';

const reducers = {
  [ReducersEnum.account]: account,
  [ReducersEnum.dappConfig]: dappConfig,
  [ReducersEnum.loginInfo]: loginInfo,
  [ReducersEnum.modals]: modals,
  [ReducersEnum.signedMessageInfo]: signedMessageInfoReducer,
  [ReducersEnum.toasts]: toasts,
  [ReducersEnum.transactionsInfo]: transactionsInfo,
  [ReducersEnum.transactions]: transactions,
  [ReducersEnum.batchTransactions]: batchTransactions
};

const getRootReducer = (customReducers = {}) =>
  combineReducers({ ...reducers, ...customReducers });

export default getRootReducer;
