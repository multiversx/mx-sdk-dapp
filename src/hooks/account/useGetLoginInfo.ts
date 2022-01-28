import { useSelector } from 'redux/DappProviderContext';
import { isLoggedInSelector, loginInfoSelector } from 'redux/selectors';

export const useGetLoginInfo = () => {
  const loginInfo = useSelector(loginInfoSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  return { ...loginInfo, isLoggedIn };
};

export default useGetLoginInfo;
