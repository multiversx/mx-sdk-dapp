import { IDappProvider } from '@elrondnetwork/erdjs';
import { emptyProvider } from './utils';

let accountProvider: IDappProvider = emptyProvider;

let externalProvider: IDappProvider | null = null;

export function setAccountProvider(provider: IDappProvider) {
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
