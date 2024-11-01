import { IframeLoginTypes } from '@multiversx/sdk-web-wallet-iframe-provider/out/constants';
import { createAction } from '@reduxjs/toolkit';
import { LOGIN_ACTION_NAME, LOGOUT_ACTION_NAME } from 'constants/index';
import { IframeLoginTypes } from 'lib/sdkWebWalletIframeProvider';
import { LoginMethodsEnum } from 'types/enums.types';

export interface LoginActionPayloadType {
  address: string;
  loginMethod: LoginMethodsEnum;
  iframeLoginType?: IframeLoginTypes;
}

export const logoutAction = createAction(LOGOUT_ACTION_NAME);

export const loginAction = createAction(
  LOGIN_ACTION_NAME,
  (payload: LoginActionPayloadType) => ({ payload })
);
