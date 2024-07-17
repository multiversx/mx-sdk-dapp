import { useSelector } from 'reduxStore/DappProviderContext';
import { networkConfigSelector } from 'reduxStore/selectors';

export const useGetNetworkConfig = () => {
  const network = useSelector(networkConfigSelector);

  return { network };
};
