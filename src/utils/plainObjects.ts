import { TransactionStatus } from '@elrondnetwork/erdjs';

export function getPlainTransactionStatus(
  transactionStatus: TransactionStatus
) {
  return {
    isPending: transactionStatus.isPending(),
    isSuccessful: transactionStatus.isSuccessful(),
    isFailed: transactionStatus.isFailed(),
    isExecuted: transactionStatus.isExecuted(),
    isInvalid: transactionStatus.isInvalid()
  };
}
