import { getAccountProvider } from 'providers/accountProvider';
import { getProviderType } from 'providers/utils';

export function getAccountProviderType() {
  const provider = getAccountProvider();
  return getProviderType(provider);
}
