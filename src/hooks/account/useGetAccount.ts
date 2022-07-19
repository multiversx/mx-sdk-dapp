import { useSelector } from 'reduxStore/DappProviderContext';
import { accountSelector } from 'reduxStore/selectors';

export const useGetAccount = () => {
  return useSelector(accountSelector);
};
