import { combineReducers } from '@reduxjs/toolkit';
import account from './slices/accountInfoSlice';
import loginInfo from './slices/loginInfoSlice';
import modals from './slices/modalsSlice';
import networkConfig from './slices/networkConfigSlice';
import toasts from './slices/toastsSlice';
import transactionsInfo from './slices/transactionsInfoSlice';
import transactions from './slices/transactionsSlice';

export default combineReducers({
  account,
  networkConfig,
  loginInfo,
  toasts,
  transactionsInfo,
  transactions,
  modals
});
