import { getAccountProvider } from 'utils/account/getAccountProvider';
import { getProviderType } from 'utils/provider';

export function getAccountProviderType() {
  const provider = getAccountProvider();
  return getProviderType(provider);
}
