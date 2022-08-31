import { useSelector } from 'reduxStore/DappProviderContext';
import { accountSelector, accountInfoSelector } from 'reduxStore/selectors';

export const useGetAccountInfo = () => {
  const account = useSelector(accountSelector);
  const info = useSelector(accountInfoSelector);
  return {
    ...info,
    // overwrite namespaced account information with plain current account
    account
  };
};
