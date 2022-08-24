import { createAction } from '@reduxjs/toolkit';
import { LOGIN_ACTION_NAME, LOGOUT_ACTION_NAME } from 'constants/index';
import { LoginMethodsEnum } from 'types/enums';

export interface LoginActionPayloadType {
  address: string;
  loginMethod: LoginMethodsEnum;
}

export const logoutAction = createAction(LOGOUT_ACTION_NAME);

export const loginAction = createAction(
  LOGIN_ACTION_NAME,
  (payload: LoginActionPayloadType) => ({ payload })
);
