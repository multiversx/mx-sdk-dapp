import { useSelector } from 'redux/DappProviderContext';
import { accountInfoSelector } from 'redux/selectors';

export const useGetAccountInfo = () => {
  return useSelector(accountInfoSelector);
};

export default useGetAccountInfo;
