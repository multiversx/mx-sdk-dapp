import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IframeLoginTypes } from 'lib/sdkWebWalletIframeProvider';
import { LoginMethodsEnum } from 'types/enums.types';
import { TokenLoginType } from '../../types';
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
}

export interface LoginInfoStateType {
  loginMethod: LoginMethodsEnum;
  iframeLoginType?: IframeLoginTypes;
  walletConnectLogin: WalletConnectLoginType | null;
  ledgerLogin: LedgerLoginType | null;
  tokenLogin: TokenLoginType | null;
  walletLogin: LoginInfoType | null;
  extensionLogin: LoginInfoType | null;
  passkeyLogin: LoginInfoType | null;
  operaLogin: LoginInfoType | null;
  crossWindowLogin: LoginInfoType | null;
  iframeWindowLogin: LoginInfoType | null;
  webviewLogin: LoginInfoType | null;
  isLoginSessionInvalid: boolean;
  logoutRoute?: string;
  isWalletConnectV2Initialized?: boolean;
}

const initialState: LoginInfoStateType = {
  loginMethod: LoginMethodsEnum.none,
  walletConnectLogin: null,
  ledgerLogin: null,
  tokenLogin: null,
  walletLogin: null,
  extensionLogin: null,
  passkeyLogin: null,
  operaLogin: null,
  crossWindowLogin: null,
  iframeWindowLogin: null,
  isLoginSessionInvalid: false,
  webviewLogin: null
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
      action: PayloadAction<TokenLoginType | null>
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
    setWebviewLogin: (
      state: LoginInfoStateType,
      action: PayloadAction<LoginInfoType | null>
    ) => {
      state.webviewLogin = action.payload;
    },
    invalidateLoginSession: (state: LoginInfoStateType) => {
      state.isLoginSessionInvalid = true;
    },
    setLogoutRoute: (
      state: LoginInfoStateType,
      action: PayloadAction<string | undefined>
    ) => {
      state.logoutRoute = action.payload;
    },
    setIsWalletConnectV2Initialized: (
      state: LoginInfoStateType,
      action: PayloadAction<boolean>
    ) => {
      state.isWalletConnectV2Initialized = action.payload;
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
        state.isLoginSessionInvalid = false;
        state.loginMethod = action.payload.loginMethod;
        state.iframeLoginType = action.payload.iframeLoginType;
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
  invalidateLoginSession,
  setLogoutRoute,
  setIsWalletConnectV2Initialized,
  setWebviewLogin
} = loginInfoSlice.actions;

export default loginInfoSlice.reducer;
