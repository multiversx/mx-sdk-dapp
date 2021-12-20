import { combineReducers } from '@reduxjs/toolkit';
import account from './slices/accountInfoSlice';
import loginInfo from './slices/loginInfoSlice';
import modals from './slices/modalsSlice';
import networkConfig from './slices/networkConfigSlice';
import transactionsInfo from './slices/transactionsInfoSlice';
import transactions from './slices/transactionsSlice';

export default combineReducers({
  account,
  networkConfig,
  loginInfo,
  transactionsInfo,
  transactions,
  modals
});
