import { PayloadAction } from '@reduxjs/toolkit';
import { LoginInfoStateType, TokenLoginType } from '../types';

export const setTokenLogin = (
  state: LoginInfoStateType,
  action: PayloadAction<TokenLoginType>
) => {
  state.tokenLogin = action.payload;
};
