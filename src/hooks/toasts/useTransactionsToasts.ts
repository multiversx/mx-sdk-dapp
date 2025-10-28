import { useMemo } from 'react';
import { useSelector } from 'reduxStore/DappProviderContext';
import {
  transactionsInfoSelectors,
  transactionToastsSelector
} from 'reduxStore/selectors';
import { TransactionBatchStatusesEnum } from 'types';
import { TransactionToastType } from 'types/toasts.types';
import { useGetSignedTransactions } from '../transactions';

export const useTransactionsToasts = () => {
  const transactionsToasts = useSelector(transactionToastsSelector);
  const transactionsInfo = useSelector(transactionsInfoSelectors);
  const { signedTransactions } = useGetSignedTransactions();

  const transactionsToastsInfo = useMemo(() => {
    return transactionsToasts.map((toast: TransactionToastType) => {
      const status = signedTransactions[toast.toastId]?.status;

      return {
        sessionId: toast.toastId,
        baseTransactionsInfo: transactionsInfo[toast.toastId] ?? {},
        customTransactionsInfo:
          signedTransactions[toast.toastId]?.customTransactionInformation
            ?.sessionInformation ?? {},
        status,
        isPending:
          status !== TransactionBatchStatusesEnum.success &&
          status !== TransactionBatchStatusesEnum.fail &&
          status !== TransactionBatchStatusesEnum.cancelled
      };
    });
  }, [transactionsToasts, signedTransactions, transactionsInfo]);

  const pendingTransactionsToastsInfo = useMemo(() => {
    return transactionsToastsInfo.filter(
      (toast: TransactionToastType & { isPending: boolean }) => toast.isPending
    );
  }, [transactionsToastsInfo]);

  return {
    transactionsToastsInfo,
    pendingTransactionsToastsInfo
  };
};
