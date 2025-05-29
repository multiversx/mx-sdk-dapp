import { networkConfigSelector } from '../../store/selectors/networkSelectors';
import { useSelector } from '../store/useSelector';

export const useGetNetworkConfig = () => {
  return useSelector(networkConfigSelector);
};
