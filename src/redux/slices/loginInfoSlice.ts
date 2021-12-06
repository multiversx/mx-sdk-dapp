import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginMethodsEnum } from '../../types';
import { logoutAction } from '../commonActions';

interface WalletConnectLoginType {
  loginType: string;
  callbackRoute: string;
  logoutRoute: string;
}

interface LedgerLoginType {
  index: number;
  loginType: string;
}

interface LoginInfoType {
  data: any;
  expires: number;
}

interface TokenLoginType {
  loginToken: string;
  signature?: string;
}

export interface LoginInfoStateType {
  loginMethod: LoginMethodsEnum;
  walletConnectLogin: WalletConnectLoginType | null;
  ledgerLogin: LedgerLoginType | null;
  tokenLogin: TokenLoginType | null;
  loginExpiresAt: number | null;
  walletLogin: LoginInfoType | null;
  extensionLogin: LoginInfoType | null;
}

const initialState = {
  loginMethod: LoginMethodsEnum.none,
  walletConnectLogin: null,
  ledgerLogin: null,
  tokenLogin: null,
  loginExpiresAt: null,
  walletLogin: null,
  extensionLogin: null
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
    setWalletConnectLogin: (
      state: LoginInfoStateType,
      action: PayloadAction<WalletConnectLoginType>
    ) => {
      state.walletConnectLogin = action.payload;
    },
    setLedgerLogin: (
      state: LoginInfoStateType,
      action: PayloadAction<LedgerLoginType>
    ) => {
      state.ledgerLogin = action.payload;
    },
    setTokenLogin: (
      state: LoginInfoStateType,
      action: PayloadAction<TokenLoginType>
    ) => {
      state.tokenLogin = action.payload;
    },
    setWalletLogin: (
      state: LoginInfoStateType,
      action: PayloadAction<LoginInfoType>
    ) => {
      state.walletLogin = action.payload;
    },
    setExtensionLogin: (
      state: LoginInfoStateType,
      action: PayloadAction<LoginInfoType>
    ) => {
      state.extensionLogin = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, () => {
      return initialState;
    });
  }
});

export const {
  setLoginMethod,
  setWalletConnectLogin,
  setLedgerLogin,
  setTokenLogin,
  setWalletLogin,
  setExtensionLogin
} = loginInfoSlice.actions;

export default loginInfoSlice.reducer;
