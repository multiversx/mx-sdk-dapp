import { getAccountProvider, getProviderType } from 'providers';

export const useGetAccountProvider = () => {
  const provider = getAccountProvider();
  const providerType = getProviderType(provider);
  return { provider, providerType };
};
