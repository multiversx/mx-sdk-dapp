import { useSelector } from 'reduxStore/DappProviderContext';
import {
  transactionsInfoSelectors,
  transactionToastsSelector
} from 'reduxStore/selectors';
import { useMemo } from 'react';
import { useGetSignedTransactions } from '../transactions';

export const useTransactionsToasts = () => {
  const transactionsToasts = useSelector(transactionToastsSelector);
  const transactionsInfo = useSelector(transactionsInfoSelectors);
  const { signedTransactions } = useGetSignedTransactions();

  const sanitizedTransactionsInfo = useMemo(() => {
    const newObj = { ...transactionsInfo };
    delete newObj['_persist'];

    return newObj;
  }, [transactionsInfo]);

  const customTransactionsInfos = useMemo(() => {
    return transactionsToasts.map((toast) => {
      return signedTransactions[toast.toastId]?.customTransactionInformation
        ?.sessionInformation;
    });
  }, [transactionsToasts, transactionsInfo]);

  console.log('useTransactionsToasts', {
    transactionsToasts,
    transactionsInfo: sanitizedTransactionsInfo,
    customTransactionsInfos
  });

  return {
    transactionsToasts,
    transactionsInfo: sanitizedTransactionsInfo,
    customTransactionsInfos
  };
};
