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

export interface LoginInfoStateType {
  loginMethod: ProviderType | null;
  walletConnectLogin: WalletConnectLoginType | null;
  ledgerLogin: LedgerLoginType | null;
}

const initialState = {
  loginMethod: null,
  walletConnectLogin: null,
  ledgerLogin: null
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
    }
  }
});

export const { setLoginMethod } = loginInfoSlice.actions;

export default loginInfoSlice.reducer;
