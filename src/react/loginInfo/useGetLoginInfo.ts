import { isLoggedInSelector } from '../../store/selectors/accountSelectors';
import { loginInfoSelector } from '../../store/selectors/loginInfoSelectors';
import { useSelector } from '../store/useSelector';

export const useGetLoginInfo = () => {
  const loginInfo = useSelector(loginInfoSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);

  return { ...loginInfo, isLoggedIn };
};
