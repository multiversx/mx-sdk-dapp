import { PayloadAction } from '@reduxjs/toolkit';
import { LoginInfoStateType } from '../types';

export const setTokenLoginSignature = (
  state: LoginInfoStateType,
  action: PayloadAction<string>
) => {
  if (state?.tokenLogin != null) {
    state.tokenLogin.signature = action.payload;
  }
};
