import { createAction } from '@reduxjs/toolkit';
import { LoginMethodsEnum } from '../types';

export interface LoginActionPayloadType {
  address: string;
  loginMethod: LoginMethodsEnum;
}

export const logoutAction = createAction('logout');

export const loginAction = createAction(
  'login',
  (payload: LoginActionPayloadType) => ({ payload })
);
