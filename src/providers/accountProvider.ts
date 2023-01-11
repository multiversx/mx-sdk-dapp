import { ExtensionProvider } from '@multiversx/sdk-extension-provider';
import { HWProvider } from '@multiversx/sdk-hw-provider';
import {
  WalletConnectProvider,
  WalletConnectV2Provider
} from '@multiversx/sdk-wallet-connect-provider';
import { WalletProvider } from '@multiversx/sdk-web-wallet-provider';
import { IDappProvider } from 'types';
import { emptyProvider } from './utils';

type ProvidersType =
  | IDappProvider
  | ExtensionProvider
  | WalletProvider
  | HWProvider
  | WalletConnectProvider
  | WalletConnectV2Provider;

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
