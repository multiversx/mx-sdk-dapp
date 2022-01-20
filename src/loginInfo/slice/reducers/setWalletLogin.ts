import { PayloadAction } from '@reduxjs/toolkit';
import { LoginInfoStateType, LoginInfoType } from '../types';

export const setWalletLogin = (
  state: LoginInfoStateType,
  { payload }: PayloadAction<LoginInfoType>
) => {
  state.walletLogin = payload;
};
