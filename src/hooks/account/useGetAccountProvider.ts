import { getAccountProvider } from 'providers/accountProvider';
import { getProviderType } from 'providers/utils';

export const useGetAccountProvider = () => {
  const provider = getAccountProvider();
  const providerType = getProviderType(provider);
  return { provider, providerType };
};

export default useGetAccountProvider;
