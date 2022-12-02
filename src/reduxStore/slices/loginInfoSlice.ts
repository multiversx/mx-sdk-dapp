import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setLoginExpiresAt, getNewLoginExpiresTimestamp } from 'storage/local';
import { TokenLoginType } from 'types';
import { LoginMethodsEnum } from 'types/enums.types';
import {
  loginAction,
  logoutAction,
  LoginActionPayloadType
} from '../commonActions';

export interface WalletConnectLoginType {
  loginType: string;
  callbackRoute: string;
  logoutRoute: string;
}

export interface LedgerLoginType {
  index: number;
  loginType: string;
}

export interface LoginInfoType {
  data: any;
  expires: number;
}

export interface LoginInfoStateType {
  loginMethod: LoginMethodsEnum;
  walletConnectLogin: WalletConnectLoginType | null;
  ledgerLogin: LedgerLoginType | null;
  tokenLogin: TokenLoginType | null;
  walletLogin: LoginInfoType | null;
  extensionLogin: LoginInfoType | null;
  isLoginSessionInvalid: boolean;
}

const initialState: LoginInfoStateType = {
  loginMethod: LoginMethodsEnum.none,
  walletConnectLogin: null,
  ledgerLogin: null,
  tokenLogin: null,
  walletLogin: null,
  extensionLogin: null,
  isLoginSessionInvalid: false
};

export const loginInfoSlice = createSlice({
  name: 'loginInfoSlice',
  initialState: initialState,
  reducers: {
    setLoginMethod: (
      state: LoginInfoStateType,
      action: PayloadAction<LoginMethodsEnum>
    ) => {
      state.loginMethod = action.payload;
    },
    setTokenLogin: (
      state: LoginInfoStateType,
      action: PayloadAction<TokenLoginType>
    ) => {
      state.tokenLogin = action.payload;
    },

    setTokenLoginSignature: (
      state: LoginInfoStateType,
      action: PayloadAction<string>
    ) => {
      if (state?.tokenLogin != null) {
        state.tokenLogin.signature = action.payload;
      }
    },
    setWalletLogin: (
      state: LoginInfoStateType,
      action: PayloadAction<LoginInfoType | null>
    ) => {
      state.walletLogin = action.payload;
    },
    setWalletConnectLogin: (
      state: LoginInfoStateType,
      action: PayloadAction<WalletConnectLoginType | null>
    ) => {
      state.walletConnectLogin = action.payload;
    },
    setLedgerLogin: (
      state: LoginInfoStateType,
      action: PayloadAction<LedgerLoginType | null>
    ) => {
      state.ledgerLogin = action.payload;
    },
    invalidateLoginSession: (state: LoginInfoStateType) => {
      state.isLoginSessionInvalid = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
    builder.addCase(
      loginAction,
      (
        state: LoginInfoStateType,
        action: PayloadAction<LoginActionPayloadType>
      ) => {
        state.loginMethod = action.payload.loginMethod;
        setLoginExpiresAt(getNewLoginExpiresTimestamp());
      }
    );
  }
});

export const {
  setLoginMethod,
  setWalletConnectLogin,
  setLedgerLogin,
  setTokenLogin,
  setTokenLoginSignature,
  setWalletLogin,
  invalidateLoginSession
} = loginInfoSlice.actions;

export default loginInfoSlice.reducer;
