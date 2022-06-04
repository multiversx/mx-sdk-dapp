import { IDappProvider } from 'types';
import { emptyProvider } from './utils';
import { ExtensionProvider } from '@elrondnetwork/erdjs-extension-provider';
import { HWProvider } from '@elrondnetwork/erdjs-hw-provider';
import { WalletConnectProvider } from '@elrondnetwork/erdjs-wallet-connect-provider';
import { WalletProvider } from '@elrondnetwork/erdjs-web-wallet-provider';

type ProvidersType =
  | IDappProvider
  | ExtensionProvider
  | WalletProvider
  | HWProvider
  | WalletConnectProvider;

let accountProvider: ProvidersType = emptyProvider;

let externalProvider: IDappProvider | null = null;

export function setAccountProvider<TProvider extends ProvidersType>(
  provider: TProvider
) {
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

export function getAccountProvider(): IDappProvider {
  return (accountProvider as IDappProvider) || emptyProvider;
}

export function getExternalProvider() {
  return externalProvider;
}
