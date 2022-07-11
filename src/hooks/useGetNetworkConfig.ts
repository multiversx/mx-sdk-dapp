import { useSelector } from 'reduxStore/DappProviderContext';
import { networkConfigSelector } from 'reduxStore/selectors';

export const useGetNetworkConfig = () => {
  return useSelector(networkConfigSelector);
};
