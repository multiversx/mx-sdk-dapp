import type { IDAppProviderBase } from '@multiversx/sdk-dapp-utils';

export interface IProvider<T extends ProviderTypeEnum = ProviderTypeEnum>
  extends IDAppProviderBase {
  init: () => Promise<boolean>;
  login: (options?: { callbackUrl?: string; token?: string }) => Promise<{
    address: string;
    signature: string;
    multisig?: string;
    impersonate?: string;
    [key: string]: unknown;
  }>;
  logout: () => Promise<boolean>;
  cancelLogin?: () => void;
  setShouldShowConsentPopup?: (shouldShow: boolean) => void;
  getType: () => T[keyof T] | string;
  getAddress(): Promise<string | undefined>;
}

export interface IProviderConfig {
  account?: {
    address: string;
  };
}

export enum ProviderTypeEnum {
  extension = 'extension',
  metamask = 'metamask',
  passkey = 'passkey',
  walletConnect = 'walletConnect',
  ledger = 'ledger',
  crossWindow = 'crossWindow',
  webview = 'webview',
  none = ''
}

export interface IProviderFactory<
  T extends ProviderTypeEnum = ProviderTypeEnum
> {
  type: T[keyof T];
  anchor?: HTMLElement;
}

export interface IProviderBase<T extends ProviderTypeEnum = ProviderTypeEnum> {
  name: string;
  type: T[keyof T];
  iconUrl?: string;
}
export interface ICustomProvider<T extends ProviderTypeEnum = ProviderTypeEnum>
  extends IProviderBase<T> {
  constructor: (options?: {
    address?: string;
    anchor?: HTMLElement;
  }) => Promise<IProvider>;
}
