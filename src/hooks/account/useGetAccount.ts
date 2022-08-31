import { useMemo } from 'react';
import { useSelector } from 'reduxStore/DappProviderContext';
import { accountSelector } from 'reduxStore/selectors';

export const useGetAccount = () => {
  const account = useSelector(accountSelector);
  const memoizedAccount = useMemo(() => {
    return account;
  }, [account]);
  return memoizedAccount;
};
