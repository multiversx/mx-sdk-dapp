import { combineReducers } from '@reduxjs/toolkit';
import account from './slices/accountSlice';
import networkConfig from './slices/networkConfigSlice';

export default combineReducers({
  account,
  networkConfig
});
