import { useSelector } from 'redux/DappProviderContext';
import { loginInfoSelector } from 'redux/selectors';

export const useGetLoginInfo = () => {
  const loginInfo = useSelector(loginInfoSelector);
  return loginInfo;
};

export default useGetLoginInfo;
