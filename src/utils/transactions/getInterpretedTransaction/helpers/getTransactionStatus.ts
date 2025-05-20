import { TransactionServerStatusesEnum } from 'types/enums.types';
import { ServerTransactionType } from 'types/serverTransactions.types';

export function getTransactionStatus(transaction: ServerTransactionType) {
  const statusIs = (compareTo: string) =>
    transaction.status.toLowerCase() === compareTo.toLowerCase();

  const failed =
    statusIs(TransactionServerStatusesEnum.fail) ||
    statusIs(TransactionServerStatusesEnum.rewardReverted);
  const success = statusIs(TransactionServerStatusesEnum.success);
  const invalid =
    statusIs(TransactionServerStatusesEnum.notExecuted) ||
    statusIs(TransactionServerStatusesEnum.invalid);
  const pending =
    statusIs(TransactionServerStatusesEnum.pending) ||
    transaction.pendingResults;
  return {
    failed,
    success,
    invalid,
    pending
  };
}
