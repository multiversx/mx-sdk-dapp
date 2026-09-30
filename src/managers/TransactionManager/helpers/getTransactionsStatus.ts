import {
  getIsTransactionFailed,
  getIsTransactionNotExecuted,
  getIsTransactionPending,
  getIsTransactionSuccessful,
  getIsTransactionTimedOut,
  isServerTransactionFailed
} from 'store/actions/transactions/transactionStateByStatus';
import { TransactionBatchStatusesEnum } from 'types/enums.types';
import { SignedTransactionType } from 'types/transactions.types';

export function getTransactionsSessionStatus(
  transactions: SignedTransactionType[]
): TransactionBatchStatusesEnum | null {
  if (!transactions || transactions.length === 0) {
    return TransactionBatchStatusesEnum.invalid;
  }

  // The session settles only once every transaction in it has settled
  const areAnyPending = transactions.some((transaction) =>
    getIsTransactionPending(transaction.status)
  );

  if (areAnyPending) {
    return null;
  }

  const areAllSuccessful = transactions.every((transaction) =>
    getIsTransactionSuccessful(transaction.status)
  );

  if (areAllSuccessful) {
    return TransactionBatchStatusesEnum.success;
  }

  const areAnyFailedOnChain = transactions.some((transaction) =>
    isServerTransactionFailed(transaction.status)
  );

  if (areAnyFailedOnChain) {
    return TransactionBatchStatusesEnum.fail;
  }

  const areAnyTimedOut = transactions.some((transaction) =>
    getIsTransactionTimedOut(transaction.status)
  );

  if (areAnyTimedOut) {
    return TransactionBatchStatusesEnum.timedOut;
  }

  const areAnyFailed = transactions.some((transaction) =>
    getIsTransactionFailed(transaction.status)
  );

  if (areAnyFailed) {
    return TransactionBatchStatusesEnum.fail;
  }

  const areAllNotExecuted = transactions.every((transaction) =>
    getIsTransactionNotExecuted(transaction.status)
  );

  if (areAllNotExecuted) {
    return TransactionBatchStatusesEnum.invalid;
  }

  return null;
}
