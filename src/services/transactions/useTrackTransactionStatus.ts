import { useSelector } from 'react-redux';
import { transactionStatusSelector } from 'redux/selectors';
import { RootState } from 'redux/store';
import { TransactionStatusesEnum } from '../../types/enums';

export function useTrackTransactionStatus(transactionSessionId: string | null) {
  const transactionsBatch = useSelector((state: RootState) =>
    transactionStatusSelector(state, transactionSessionId)
  );
  const { status, transactions } = transactionsBatch;
  console.log(status, transactions, transactionsBatch);

  const isPending =
    status === TransactionStatusesEnum.sent || TransactionStatusesEnum.pending;
  const isFailed = status === TransactionStatusesEnum.failed;
  const isSuccessful = status === TransactionStatusesEnum.executed;
  const isInvalid = status === TransactionStatusesEnum.invalid;

  return {
    isPending,
    isFailed,
    isSuccessful,
    isInvalid,
    status,
    transactions
  };
}

export default useTrackTransactionStatus;
