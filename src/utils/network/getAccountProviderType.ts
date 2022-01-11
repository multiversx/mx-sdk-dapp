import { getProviderType } from 'utils/provider';
import { getAccountProvider } from './getAccountProvider';

export function getAccountProviderType() {
  const provider = getAccountProvider();
  return getProviderType(provider);
}
