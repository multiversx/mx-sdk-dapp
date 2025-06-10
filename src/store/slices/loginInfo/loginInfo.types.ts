import { ProviderType } from 'providers/types/providerFactory.types';
import { TokenLoginType } from 'types/login.types';

export interface WalletConnectLoginType {
  loginType: string;
  callbackRoute: string;
  logoutRoute: string;
}

export interface LedgerLoginType {
  index: number;
  loginType: string;
}

export interface LoginInfoType {
  data: any;
  expires: number;
}

export interface LoginInfoSliceType<T extends ProviderType = ProviderType> {
  providerType: T | null;
  walletConnectLogin: WalletConnectLoginType | null;
  ledgerLogin: LedgerLoginType | null;
  tokenLogin: TokenLoginType | null;
  walletLogin: LoginInfoType | null;
  extensionLogin: LoginInfoType | null;
  operaLogin: LoginInfoType | null;
  crossWindowLogin: LoginInfoType | null;
  logoutRoute?: string;
  isWalletConnectV2Initialized?: boolean;
  loginExpiresAt: number | null;
}
