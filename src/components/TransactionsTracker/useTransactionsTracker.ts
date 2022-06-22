import { useEffect, useRef } from 'react';
import { getTransactionsByHashes as defaultGetTxByHash } from 'apiCalls/transactions';
import { GetTransactionsByHashesType } from 'types';
import { useCheckTransactionStatus, useGetPendingTransactions } from 'hooks';
import { getIsTransactionPending } from 'utils';

export interface TransactionsTrackerType {
  getTransactionsByHash?: GetTransactionsByHashesType;
}

export function useTransactionsTracker(props?: TransactionsTrackerType) {
  const { pendingTransactionsArray } = useGetPendingTransactions();

  const getTransactionsByHash =
    props?.getTransactionsByHash ?? defaultGetTxByHash;

  const checkTransactionStatus = useCheckTransactionStatus();
  const intervalRef = useRef<any>();

  const pendingBatches = pendingTransactionsArray.filter(
    ([sessionId, transactionBatch]) => {
      const isPending =
        sessionId != null && getIsTransactionPending(transactionBatch.status);
      return isPending;
    }
  );

  useEffect(() => {
    if (pendingBatches.length > 0) {
      intervalRef.current = setInterval(() => {
        checkTransactionStatus({ getTransactionsByHash });
      }, 2000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [pendingBatches]);
}

export default useTransactionsTracker;
