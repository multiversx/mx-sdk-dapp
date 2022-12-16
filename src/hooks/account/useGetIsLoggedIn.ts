import { useGetLoginInfo } from './useGetLoginInfo';

export const useGetIsLoggedIn = () => {
  const { isLoggedIn } = useGetLoginInfo();
  return isLoggedIn;
};
