import { TransactionStatus } from '@elrondnetwork/erdjs';
import { TransactionStatusesEnum } from '../types/enums';

export function getPlainTransactionStatus(
  transactionStatus: TransactionStatus
): any {
  const statusObj = {
    [TransactionStatusesEnum.pending]: transactionStatus.isPending(),
    [TransactionStatusesEnum.successful]: transactionStatus.isSuccessful(),
    [TransactionStatusesEnum.failed]: transactionStatus.isFailed(),
    [TransactionStatusesEnum.executed]: transactionStatus.isExecuted(),
    [TransactionStatusesEnum.invalid]: transactionStatus.isInvalid()
  };
  return Object.entries(statusObj).reduce((prev, [key, value]) => {
    if (value) {
      return key as TransactionStatusesEnum;
    }
    return prev;
  }, TransactionStatusesEnum.pending);
}
