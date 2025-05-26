import { isLoggedInSelector } from 'store/selectors/accountSelectors';
import { useSelector } from '../store/useSelector';

export const useGetIsLoggedIn = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return isLoggedIn;
};
