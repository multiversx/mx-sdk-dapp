import { createSlice } from '@reduxjs/toolkit';
import { loginAction, logoutAction } from '../../redux/commonActions';
import { initialState } from './initialState';
import { login } from './reducers/login';
import { logout } from './reducers/logout';
import { setExtensionLogin } from './reducers/setExtensionLogin';
import { setLedgerLogin } from './reducers/setLedgerLogin';
import { setLoginMethod } from './reducers/setLoginMethod';
import { setTokenLoginSignature } from './reducers/setTokenLoginSignature';
import { setTokenLogin } from './reducers/setTokenMethod';
import { setWalletConnectLogin } from './reducers/setWalletConnectLogin';
import { setWalletLogin } from './reducers/setWalletLogin';

export const loginInfoSlice = createSlice({
  name: 'loginInfoSlice',
  initialState: initialState,
  reducers: {
    setLoginMethod,
    setTokenLogin,
    setTokenLoginSignature,
    setWalletLogin,
    setExtensionLogin,
    setWalletConnectLogin,
    setLedgerLogin
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, logout);
    builder.addCase(loginAction, login);
  }
});

export const { actions } = loginInfoSlice;

export default loginInfoSlice.reducer;
