import { useSelector } from 'redux/DappProvider';
import { accountInfoSelector } from 'redux/selectors';

export const useGetAccountInfo = () => {
  const accountInfo = useSelector(accountInfoSelector);
  return accountInfo;
};

export default useGetAccountInfo;
