import { networkSelector } from '../../store/selectors/networkSelectors';
import { useSelector } from '../store/useSelector';

export const useGetNetwork = () => {
  return useSelector(networkSelector);
};
