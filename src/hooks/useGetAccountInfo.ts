import { useSelector } from 'redux/DappProviderContext';
import { accountInfoSelector } from 'redux/selectors';

export const useGetAccountInfo = () => {
  const accountInfo = useSelector(accountInfoSelector);
  return accountInfo;
};

export default useGetAccountInfo;
