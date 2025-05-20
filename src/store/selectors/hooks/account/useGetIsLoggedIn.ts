import { isLoggedInSelector } from 'store/selectors/accountSelectors';
import { useSelector } from '../useSelector';

export const useGetIsLoggedIn = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return isLoggedIn;
};
