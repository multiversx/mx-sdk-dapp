import { accountSelector } from '../../store/selectors/accountSelectors';
import { useSelector } from '../store/useSelector';

export const useGetAccount = () => {
  return useSelector(accountSelector);
};
