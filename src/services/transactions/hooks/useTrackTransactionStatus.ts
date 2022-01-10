import { transactionStatusSelector } from 'redux/selectors';
import { useSelector } from 'redux/store';
import { RootState } from 'redux/store';
import { TransactionBatchStatusesEnum } from 'types/enums';
import {
  getIsTransactionFailed,
  getIsTransactionPending,
  getIsTransactionSuccessful
} from 'utils';

export function useTrackTransactionStatus(transactionSessionId: string | null) {
  const transactionsBatch = useSelector((state: RootState) =>
    transactionStatusSelector(state, transactionSessionId)
  );

  if (transactionSessionId == null || transactionsBatch == null) {
    return { errorMessage: 'No transaction to track' };
  }
  const { status, transactions, errorMessage } = transactionsBatch;

  const isPending = getIsTransactionPending(status);
  const isFailed = getIsTransactionFailed(status);
  const isSuccessful = getIsTransactionSuccessful(status);
  const isCancelled = status === TransactionBatchStatusesEnum.cancelled;

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
