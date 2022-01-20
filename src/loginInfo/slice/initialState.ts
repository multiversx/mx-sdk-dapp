import { LoginMethodsEnum } from '../../types';
import { LoginInfoStateType } from './types';

export const initialState: LoginInfoStateType = {
  loginMethod: LoginMethodsEnum.none,
  walletConnectLogin: null,
  ledgerLogin: null,
  tokenLogin: null,
  loginExpiresAt: null,
  walletLogin: null,
  extensionLogin: null
};
