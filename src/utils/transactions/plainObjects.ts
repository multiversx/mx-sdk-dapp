import { TransactionStatus } from '@elrondnetwork/erdjs';
import { TransactionServerStatusesEnum } from 'types/enums';

export function getPlainTransactionStatus(
  transactionStatus: TransactionStatus
): any {
  if (
    transactionStatus.toString() === TransactionServerStatusesEnum.completed
  ) {
    return TransactionServerStatusesEnum.completed;
  }

  const statusObj = {
    [TransactionServerStatusesEnum.pending]: transactionStatus.isPending(),
    [TransactionServerStatusesEnum.success]: transactionStatus.isSuccessful(),
    [TransactionServerStatusesEnum.failed]: transactionStatus.isFailed(),
    [TransactionServerStatusesEnum.invalid]: transactionStatus.isInvalid()
  };
  return Object.entries(statusObj).reduce((prev, [key, value]) => {
    if (value) {
      return key as TransactionServerStatusesEnum;
    }
    return prev;
  }, TransactionServerStatusesEnum.pending);
}
