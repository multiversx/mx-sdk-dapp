import { combineReducers } from '@reduxjs/toolkit';
import account from './slices/accountInfoSlice';
import loginInfo from './slices/loginInfoSlice';
import networkConfig from './slices/networkConfigSlice';

export default combineReducers({
  account,
  networkConfig,
  loginInfo
});
