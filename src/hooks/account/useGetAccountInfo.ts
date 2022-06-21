import { useSelector } from 'reduxStore/DappProviderContext';
import { accountInfoSelector } from 'reduxStore/selectors';

export const useGetAccountInfo = () => {
  return useSelector(accountInfoSelector);
};

export default useGetAccountInfo;
