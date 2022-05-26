import { IDappProvider } from 'types';
import { emptyProvider } from './utils';

type ProvidersType = IDappProvider;

let accountProvider: ProvidersType = emptyProvider;

let externalProvider: IDappProvider | null = null;

export function setAccountProvider<TProvide extends ProvidersType>(
  provider: TProvide
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

export function getAccountProvider() {
  return accountProvider || emptyProvider;
}

export function getExternalProvider() {
  return externalProvider;
}
