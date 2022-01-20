import {LoginInfoStateType} from '../types';
import {PayloadAction} from '@reduxjs/toolkit';
import {LoginActionPayloadType} from '../../../redux/commonActions';

export const login = (
  state: LoginInfoStateType,
  action: PayloadAction<LoginActionPayloadType>
) => {
  state.loginMethod = action.payload.loginMethod;
};
