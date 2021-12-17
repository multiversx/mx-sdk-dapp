import { useSelector } from 'react-redux';
import { transactionStatusSelector } from 'redux/selectors';
import { RootState } from 'redux/store';
import { TransactionBatchStatusesEnum } from 'types/enums';

export function useTrackTransactionStatus(transactionSessionId: string | null) {
  const transactionsBatch = useSelector((state: RootState) =>
    transactionStatusSelector(state, transactionSessionId)
  );

  if (transactionSessionId == null || transactionsBatch == null) {
    return { errorMessage: 'No transaction to track' };
  }
  const { status, transactions, errorMessage } = transactionsBatch;

  const pendingStatuses = [
    TransactionBatchStatusesEnum.sent,
    TransactionBatchStatusesEnum.signed
  ];

  const failedStatuses = [
    TransactionBatchStatusesEnum.failed || TransactionBatchStatusesEnum.timedOut
  ];

  const isPending = status != null && pendingStatuses.includes(status);
  const isFailed = status != null && failedStatuses.includes(status);
  const isCancelled = status === TransactionBatchStatusesEnum.cancelled;
  const isSuccessful = status === TransactionBatchStatusesEnum.successful;

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
