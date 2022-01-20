import { LoginMethodsEnum } from '../../../types';

export type WalletConnectLoginType = {
  loginType: string;
  callbackRoute: string;
  logoutRoute: string;
};

export type LedgerLoginType = {
  index: number;
  loginType: string;
};

export type LoginInfoType = {
  data: any;
  expires: number;
};

export type TokenLoginType = {
  loginToken: string;
  signature?: string;
};

export type LoginInfoStateType = {
  loginMethod: LoginMethodsEnum;
  walletConnectLogin: WalletConnectLoginType | null;
  ledgerLogin: LedgerLoginType | null;
  tokenLogin: TokenLoginType | null;
  loginExpiresAt: number | null; // TODO: seems unused in dapp. maybe removed?
  walletLogin: LoginInfoType | null;
  extensionLogin: LoginInfoType | null;
};
