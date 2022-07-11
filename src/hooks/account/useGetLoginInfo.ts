import { useSelector } from 'reduxStore/DappProviderContext';
import { isLoggedInSelector, loginInfoSelector } from 'reduxStore/selectors';

export const useGetLoginInfo = () => {
  const loginInfo = useSelector(loginInfoSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  return { ...loginInfo, isLoggedIn };
};
