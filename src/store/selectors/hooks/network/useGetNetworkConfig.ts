import { networkConfigSelector } from 'store/selectors/networkSelectors';
import { useSelector } from '../useSelector';

export const useGetNetworkConfig = () => {
  return useSelector(networkConfigSelector);
};
