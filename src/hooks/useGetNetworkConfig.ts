import { useSelector } from 'redux/DappProviderContext';
import { networkConfigSelector } from 'redux/selectors';

export const useGetNetworkConfig = () => {
  return useSelector(networkConfigSelector);
};

export default useGetNetworkConfig;
