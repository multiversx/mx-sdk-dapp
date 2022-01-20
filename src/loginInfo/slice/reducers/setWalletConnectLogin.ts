import { PayloadAction } from '@reduxjs/toolkit';
import { LoginInfoStateType, WalletConnectLoginType } from '../types';

export const setWalletConnectLogin = (
  state: LoginInfoStateType,
  action: PayloadAction<WalletConnectLoginType>
) => {
  state.walletConnectLogin = action.payload;
};
