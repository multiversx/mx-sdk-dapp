import { getAccountProvider, getProviderType } from 'providers';

export function getAccountProviderType() {
  const provider = getAccountProvider();
  return getProviderType(provider);
}
