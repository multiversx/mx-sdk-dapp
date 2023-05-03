import { useSelector } from 'reduxStore/DappProviderContext';
import {
  transactionsInfoSelectors,
  transactionToastsSelector
} from 'reduxStore/selectors';
import { useMemo } from 'react';
import {
  // useGetPendingTransactions,
  useGetSignedTransactions
} from '../transactions';
import { TransactionBatchStatusesEnum } from '../../types';

export const useTransactionsToasts = () => {
  const transactionsToasts = useSelector(transactionToastsSelector);
  const transactionsInfo = useSelector(transactionsInfoSelectors);
  const { signedTransactions } = useGetSignedTransactions();
  // const { pendingTransactions } = useGetPendingTransactions();

  const sanitizedTransactionsInfo = useMemo(() => {
    const newObj = { ...transactionsInfo };
    delete newObj['_persist'];

    return newObj;
  }, [transactionsInfo]);

  // const customTransactionsInfo = useMemo(() => {
  //   return transactionsToasts.map((toast) => {
  //     return {
  //       sessionId: toast.toastId,
  //       ...signedTransactions[toast.toastId]?.customTransactionInformation
  //         ?.sessionInformation
  //     };
  //   });
  // }, [transactionsToasts, transactionsInfo]);

  // const customPendingTransactionsInfo = useMemo(() => {
  //   return transactionsToasts.map((toast) => {
  //     return pendingTransactions[toast.toastId]?.customTransactionInformation
  //       ?.sessionInformation;
  //   });
  // }, [transactionsToasts, transactionsInfo]);

  // const transactionsInfoArray = useMemo(() => {
  //   return Object.values(sanitizedTransactionsInfo);
  // }, [sanitizedTransactionsInfo]);

  const transactionsToastsInfo = useMemo(() => {
    return transactionsToasts.map((toast) => {
      const status = signedTransactions[toast.toastId]?.status;

      return {
        sessionId: toast.toastId,
        baseTransactionsInfo: sanitizedTransactionsInfo[toast.toastId],
        customTransactionsInfo:
          signedTransactions[toast.toastId]?.customTransactionInformation
            ?.sessionInformation,
        status,
        isPending:
          status !== TransactionBatchStatusesEnum.success &&
          status !== TransactionBatchStatusesEnum.fail
      };
    });
  }, [transactionsToasts, transactionsInfo]);

  const pendingTransactionsToastsInfo = useMemo(() => {
    return transactionsToastsInfo.filter((toast) => toast.isPending);
  }, [transactionsToastsInfo]);

  console.log('useTransactionsToasts', {
    // transactionsToasts,
    // transactionsInfo: sanitizedTransactionsInfo,
    // transactionsInfoArray,
    // customTransactionsInfo
    // customPendingTransactionsInfo,
    pendingTransactionsToastsInfo
  });

  return {
    // transactionsToasts,
    // transactionsInfo: sanitizedTransactionsInfo,
    // transactionsInfoArray,
    // customTransactionsInfo,
    // customPendingTransactionsInfo,
    pendingTransactionsToastsInfo
  };
};
