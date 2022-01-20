import { useSelector } from 'redux/DappProviderContext';
import { providerSelector } from 'redux/selectors';
import { getProviderType } from 'utils';

export const useGetAccountProvider = () => {
  const provider = useSelector(providerSelector);
  const providerType = getProviderType(provider);
  return { provider, providerType };
};

export default useGetAccountProvider;
