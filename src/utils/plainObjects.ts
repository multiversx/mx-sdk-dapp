import { TransactionStatus } from '@elrondnetwork/erdjs';
import { TransactionServerStatusesEnum } from '../types/enums';

export function getPlainTransactionStatus(
  transactionStatus: TransactionStatus
): any {
  const statusObj = {
    [TransactionServerStatusesEnum.pending]: transactionStatus.isPending(),
    [TransactionServerStatusesEnum.successful]:
      transactionStatus.isSuccessful(),
    [TransactionServerStatusesEnum.failed]: transactionStatus.isFailed(),
    [TransactionServerStatusesEnum.executed]: transactionStatus.isExecuted(),
    [TransactionServerStatusesEnum.invalid]: transactionStatus.isInvalid()
  };
  return Object.entries(statusObj).reduce((prev, [key, value]) => {
    if (value) {
      return key as TransactionServerStatusesEnum;
    }
    return prev;
  }, TransactionServerStatusesEnum.pending);
}
