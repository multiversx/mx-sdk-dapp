import { accountInfoSelector } from '../../store/selectors/accountSelectors';
import { useSelector } from '../store/useSelector';

export const useGetAccountInfo = () => {
  return useSelector(accountInfoSelector);
};
