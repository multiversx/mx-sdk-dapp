import { useEffect } from 'react';
import { useSelector } from 'redux/DappProviderContext';
import { transactionStatusSelector } from 'redux/selectors';
import { RootState } from 'redux/store';
import { TransactionBatchStatusesEnum } from 'types/enums';
import {
  getIsTransactionFailed,
  getIsTransactionPending,
  getIsTransactionSuccessful
} from 'utils';

export interface UseTrackTransactionStatusArgsType {
  transactionId: string | null;
  onSuccess?: (transactionId: string | null) => void;
  onFailed?: (transactionId: string | null, errorMessage?: string) => void;
  onCancelled?: (transactionId: string | null) => void;
}

export function useTrackTransactionStatus({
  transactionId,
  onSuccess,
  onFailed,
  onCancelled
}: UseTrackTransactionStatusArgsType) {
  const transactionsBatch = useSelector((state: RootState) =>
    transactionStatusSelector(state, transactionId)
  );

  const { status, transactions, errorMessage } = transactionsBatch;

  const isPending = getIsTransactionPending(status);
  const isFailed = getIsTransactionFailed(status);
  const isSuccessful = getIsTransactionSuccessful(status);
  const isCancelled = status === TransactionBatchStatusesEnum.cancelled;

  useEffect(() => {
    if (isSuccessful && onSuccess) {
      onSuccess(transactionId);
    }
  }, [isSuccessful]);

  useEffect(() => {
    if (isFailed && onFailed) {
      onFailed(transactionId, errorMessage);
    }
  }, [isFailed]);

  useEffect(() => {
    if (isCancelled && onCancelled) {
      onCancelled(transactionId);
    }
  }, [isCancelled]);

  if (transactionId == null) {
    return {};
  }

  if (transactionsBatch == null) {
    return { errorMessage: 'No transaction to track' };
  }

  return {
    isPending,
    isSuccessful,
    isFailed,
    isCancelled,
    errorMessage,
    status,
    transactions
  };
}

export default useTrackTransactionStatus;
