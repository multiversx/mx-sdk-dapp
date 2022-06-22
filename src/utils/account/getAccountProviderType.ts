import { getAccountProvider } from 'utils/account/getAccountProvider';
import { getProviderType } from 'utils/providers';

export function getAccountProviderType() {
  const provider = getAccountProvider();
  return getProviderType(provider);
}
