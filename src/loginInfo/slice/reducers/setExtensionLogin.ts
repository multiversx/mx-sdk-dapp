import { PayloadAction } from '@reduxjs/toolkit';
import { LoginInfoStateType, LoginInfoType } from '../types';

export const setExtensionLogin = (
  state: LoginInfoStateType,
  action: PayloadAction<LoginInfoType>
) => {
  state.extensionLogin = action.payload;
};
