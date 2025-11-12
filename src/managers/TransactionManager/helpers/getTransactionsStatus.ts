import {
  getIsTransactionFailed,
  getIsTransactionNotExecuted,
  getIsTransactionSuccessful
} from 'store/actions/transactions/transactionStateByStatus';
import { TransactionBatchStatusesEnum } from 'types/enums.types';
import { SignedTransactionType } from 'types/transactions.types';

export function getTransactionsSessionStatus(
  transactions: SignedTransactionType[]
): TransactionBatchStatusesEnum | null {
  if (!transactions || transactions.length === 0) {
    return TransactionBatchStatusesEnum.invalid;
  }

  const areAllSuccessful = transactions.every((transaction) =>
    getIsTransactionSuccessful(transaction.status)
  );

  if (areAllSuccessful) {
    return TransactionBatchStatusesEnum.success;
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
