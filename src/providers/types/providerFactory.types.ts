import type { IDAppProviderBase } from '@multiversx/sdk-dapp-utils';

export interface IProvider<T extends ProviderType = ProviderType>
  extends IDAppProviderBase {
  init: () => Promise<boolean>;
  login: (options?: { callbackUrl?: string; token?: string }) => Promise<{
    address: string;
    signature: string;
    multisig?: string;
    impersonate?: string;
    accessToken?: string;
    [key: string]: unknown;
  }>;
  logout: () => Promise<boolean>;
  cancelLogin?: () => void;
  getType: () => T;
  getAddress(): Promise<string | undefined>;
}

export interface IProviderConfig {
  account?: {
    address: string;
  };
}

export const ProviderTypeEnum = {
  extension: 'extension',
  metamask: 'metamask',
  walletConnect: 'walletConnect',
  ledger: 'ledger',
  crossWindow: 'crossWindow',
  webview: 'webview',
  none: ''
} as const;

export type ProviderBaseType =
  (typeof ProviderTypeEnum)[keyof typeof ProviderTypeEnum];

export type ProviderType = ProviderBaseType | (string & {}); // This allows custom providers to be used as a string

export interface IProviderFactory<T extends ProviderType = ProviderType> {
  type: T;
  anchor?: HTMLElement;
}

export interface IProviderBase<T extends ProviderType = ProviderType> {
  name: string;
  type: T;
  iconUrl?: string;
}
export interface ICustomProvider<T extends ProviderType = ProviderType>
  extends IProviderBase<T> {
  constructor: (options?: {
    address?: string;
    anchor?: HTMLElement;
  }) => Promise<IProvider>;
}
