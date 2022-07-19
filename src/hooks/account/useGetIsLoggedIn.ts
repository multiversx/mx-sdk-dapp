import { useSelector } from 'reduxStore/DappProviderContext';
import { isLoggedInSelector } from 'reduxStore/selectors';

export const useGetIsLoggedIn = () => {
  return useSelector(isLoggedInSelector);
};
