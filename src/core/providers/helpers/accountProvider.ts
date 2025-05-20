import { IProvider } from 'core/providers/types/providerFactory.types';
import { DappProvider } from '../DappProvider';
import { emptyProvider } from './emptyProvider';

export type ProvidersType = IProvider;

let accountProvider: DappProvider | null = null;

export function setAccountProvider<TProvider extends DappProvider | null>(
  provider: TProvider
) {
  accountProvider = provider;
}

export function getAccountProvider(): DappProvider {
  return accountProvider || new DappProvider(emptyProvider);
}
