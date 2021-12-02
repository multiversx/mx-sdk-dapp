import { combineReducers } from '@reduxjs/toolkit';
import account from './slices/accountSlice';
import networkConfig from './slices/networkConfigSlice';
import loginInfo from './slices/loginInfoSlice';

export default combineReducers({
  account,
  networkConfig,
  loginInfo
});
