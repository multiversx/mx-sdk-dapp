import { PayloadAction } from '@reduxjs/toolkit';
import { LoginMethodsEnum } from '../../../types';
import { LoginInfoStateType } from '../types';

export const setLoginMethod = (
  state: LoginInfoStateType,
  action: PayloadAction<LoginMethodsEnum>
) => {
  state.loginMethod = action.payload;
};
