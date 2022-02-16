import { useEffect } from 'react';
import { useSelector } from 'redux/DappProviderContext';
import { transactionStatusSelector } from 'redux/selectors';
import { RootState } from 'redux/store';
import { TransactionBatchStatusesEnum } from 'types/enums';
import {
  getIsTransactionCompleted,
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
  onCompleted?: (transactionId: string | null) => void;
}

export function useTrackTransactionStatus({
  transactionId,
  onSuccess,
  onFail,
  onCancelled,
  onTimedOut,
  onCompleted
}: UseTrackTransactionStatusArgsType) {
  const transactionsBatch = useSelector((state: RootState) =>
    transactionStatusSelector(state, transactionId)
  );

  const { status, transactions, errorMessage } = transactionsBatch;

  const isPending = getIsTransactionPending(status);
  const isFail = getIsTransactionFailed(status);
  const isTimedOut = getIsTransactionTimedOut(status);
  const isSuccess = getIsTransactionSuccessful(status);
  const isCompleted = getIsTransactionCompleted(status);

  const isCancelled = status === TransactionBatchStatusesEnum.cancelled;

  useEffect(() => {
    if (isSuccess && onSuccess) {
      onSuccess(transactionId);
    }
  }, [isSuccess]);
  useEffect(() => {
    if (isCompleted && onCompleted) {
      onCompleted(transactionId);
    }
  }, [isCompleted]);

  useEffect(() => {
    if (isFail && onFail) {
      onFail(transactionId, errorMessage);
    }
  }, [isFail]);

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
    isSuccess,
    isFail,
    isCancelled,
    isCompleted,
    errorMessage,
    status,
    transactions
  };
}

export default useTrackTransactionStatus;
