import { getProviderType } from 'utils';
import { accountProviderSelector } from 'reduxStore/selectors/providersSelectors';
import { useSelector } from 'reduxStore/DappProviderContext';

export const useGetAccountProvider = () => {
  const provider = useSelector(accountProviderSelector);

  const providerType = getProviderType(provider);
  return { provider, providerType };
};

export default useGetAccountProvider;
