import { createAction } from '@reduxjs/toolkit';
import { LoginMethodsEnum } from 'types/enums';
import { loginActionName, logoutActionName } from 'constants/index';

export interface LoginActionPayloadType {
  address: string;
  loginMethod: LoginMethodsEnum;
}

export const logoutAction = createAction(logoutActionName);

export const loginAction = createAction(
  loginActionName,
  (payload: LoginActionPayloadType) => ({ payload })
);
