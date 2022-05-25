import { useEffect } from 'react';
import { useSelector } from 'redux/DappProviderContext';
import { transactionStatusSelector } from 'redux/selectors';
import { RootState } from 'redux/store';
import { TransactionBatchStatusesEnum } from 'types/enums';
import {
  getIsTransactionFailed,
  getIsTransactionPending,
  getIsTransactionSuccessful,
  getIsTransactionTimedOut
} from 'utils';

export interface UseTrackTransactionStatusArgsType {
  transactionId: string | null;
  onSuccess?: (transactionId: string | null) => void;
  onFail?: (transactionId: string | null, errorMessage?: string) => void;
  onTimedOut?: (transactionId: string | null) => void;
  onCancelled?: (transactionId: string | null) => void;
}

export function useTrackTransactionStatus({
  transactionId,
  onSuccess,
  onFail,
  onCancelled,
  onTimedOut
}: UseTrackTransactionStatusArgsType) {
  const transactionsBatch = useSelector((state: RootState) =>
    transactionStatusSelector(state, transactionId)
  );

  const { status, transactions, errorMessage } = transactionsBatch;

  const isPending = getIsTransactionPending(status);
  const isFailed = getIsTransactionFailed(status);
  const isTimedOut = getIsTransactionTimedOut(status);
  const isSuccessful = getIsTransactionSuccessful(status);

  const isCancelled = status === TransactionBatchStatusesEnum.cancelled;

  useEffect(() => {
    if (isSuccessful && onSuccess) {
      onSuccess(transactionId);
    }
  }, [isSuccessful]);

  useEffect(() => {
    if (isFailed && onFail) {
      onFail(transactionId, errorMessage);
    }
  }, [isFailed]);

  useEffect(() => {
    if (isCancelled && onCancelled) {
      onCancelled(transactionId);
    }
  }, [isCancelled]);

  useEffect(() => {
    if (isTimedOut) {
      if (onTimedOut) {
        onTimedOut(transactionId);
      } else {
        onFail?.(transactionId, 'timeout');
      }
    }
  }, [isTimedOut]);

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
