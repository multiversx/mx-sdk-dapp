import { useSelector } from 'reduxStore/DappProviderContext';
import { isLoggedInSelector, loginInfoSelector } from 'reduxStore/selectors';
import { useAxiosInterceptorContext } from 'wrappers/AxiosInterceptorContext';

export const useGetLoginInfo = () => {
  // if AxiosInterceptor is mounted, prioritize information comming from AxiosContext
  try {
    const { loginInfo, isLoggedIn } = useAxiosInterceptorContext();

    return { ...loginInfo, isLoggedIn };
    // if not mounted, proceed to returning information from store
  } catch {
    const loginInfo = useSelector(loginInfoSelector);
    const isLoggedIn = useSelector(isLoggedInSelector);

    return { ...loginInfo, isLoggedIn };
  }
};
