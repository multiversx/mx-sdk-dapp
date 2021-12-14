import { createAction } from '@reduxjs/toolkit';
import { loginMethodsEnum } from '../types/enums';

export interface LoginActionPayloadType {
  address: string;
  loginMethod: loginMethodsEnum;
}

export const logoutAction = createAction('logout');

export const loginAction = createAction(
  'login',
  (payload: LoginActionPayloadType) => ({ payload })
);
