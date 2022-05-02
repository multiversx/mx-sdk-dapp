import { IDappProvider } from '@elrondnetwork/erdjs';
import { ExternalProviderType } from 'types';
import { emptyProvider } from './utils';

let accountProvider: IDappProvider = emptyProvider;

let externalProvider: ExternalProviderType | null = null;

export function setAccountProvider(provider: IDappProvider) {
  accountProvider = provider;
}

export function setExternalAccountProvider(provider: ExternalProviderType) {
  externalProvider = provider;
}

export function loginWithExternalProvider() {
  if (externalProvider != null) {
    accountProvider = externalProvider.getProvider();
  }
}

export function getAccountProvider() {
  return accountProvider || emptyProvider;
}
