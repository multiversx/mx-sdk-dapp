import { emptyProvider } from './utils';
import { IDappProvider } from 'types';
import { ExtensionProvider } from '@elrondnetwork/erdjs-extension-provider/out';
import { WalletProvider } from '@elrondnetwork/erdjs-web-wallet-provider/out';
import { HWProvider } from '@elrondnetwork/erdjs-hw-provider/out';
import { WalletConnectProvider } from '@elrondnetwork/erdjs-wallet-connect-provider/out';

type ProvidersType = IDappProvider | ExtensionProvider | WalletProvider | HWProvider | WalletConnectProvider;

let accountProvider: ProvidersType = emptyProvider;

let externalProvider: IDappProvider | null = null;

export function setAccountProvider<TProvide extends ProvidersType>(provider: TProvide) {
  accountProvider = provider;
}

export function setExternalProvider(provider: IDappProvider) {
  externalProvider = provider;
}

export function setExternalProviderAsAccountProvider() {
  if (externalProvider != null) {
    accountProvider = externalProvider;
  }
}

export function getAccountProvider() {
  return accountProvider || emptyProvider;
}

export function getExternalProvider() {
  return externalProvider;
}
