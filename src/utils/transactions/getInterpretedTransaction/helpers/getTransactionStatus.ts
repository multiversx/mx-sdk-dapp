import {
  InterpretedTransactionType,
  TransactionServerStatusesEnum
} from 'types';

export function getTransactionStatus(transaction: InterpretedTransactionType) {
  const statusIs = (compareTo: string) =>
    transaction.status.toLowerCase() === compareTo.toLowerCase();

  const failed = statusIs(TransactionServerStatusesEnum.fail);
  const success = statusIs(TransactionServerStatusesEnum.success);
  const invalid =
    statusIs(TransactionServerStatusesEnum.notExecuted) ||
    statusIs(TransactionServerStatusesEnum.invalid);
  const pending = statusIs(TransactionServerStatusesEnum.pending);
  return {
    failed,
    success,
    invalid,
    pending
  };
}
