import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProviderType } from '../../utils/provider';

interface WalletConnectLoginType {
  loginType: string;
  callbackRoute: string;
  logoutRoute: string;
}

interface LedgerLoginType {
  index: number;
  loginType: string;
}

interface TokenLoginType {
  loginToken: string;
  signature?: string;
}

export interface LoginInfoStateType {
  loginMethod: ProviderType | null;
  walletConnectLogin: WalletConnectLoginType | null;
  ledgerLogin: LedgerLoginType | null;
  tokenLogin: TokenLoginType | null;
}

const initialState = {
  loginMethod: null,
  walletConnectLogin: null,
  ledgerLogin: null,
  tokenLogin: null
};

export const loginInfoSlice = createSlice({
  name: 'loginInfoSlice',
  initialState: initialState,
  reducers: {
    setLoginMethod: (
      state: LoginInfoStateType,
      action: PayloadAction<ProviderType>
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
    }
  }
});

export const {
  setLoginMethod,
  setWalletConnectLogin,
  setLedgerLogin,
  setTokenLogin
} = loginInfoSlice.actions;

export default loginInfoSlice.reducer;
