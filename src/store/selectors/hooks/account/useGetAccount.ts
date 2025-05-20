import { accountSelector } from 'store/selectors/accountSelectors';
import { useSelector } from '../useSelector';

export const useGetAccount = () => {
  return useSelector(accountSelector);
};
