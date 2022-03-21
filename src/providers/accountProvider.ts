import { IDappProvider } from '@elrondnetwork/erdjs';
import { emptyProvider } from './utils';

let accountProvider: IDappProvider = emptyProvider;

export function setAccountProvider(provider: IDappProvider) {
  accountProvider = provider;
}

export function getAccountProvider() {
  return accountProvider || emptyProvider;
}
