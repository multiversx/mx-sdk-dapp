import { TransactionServerStatusesEnum } from 'types/enums.types';
import { InterpretedTransactionType } from 'types/serverTransactions.types';

export const getTransactionStatusText = (
  transaction: InterpretedTransactionType
) => {
  switch (true) {
    case transaction.pendingResults:
      return 'Pending (Smart Contract Execution)';
    case transaction.status === TransactionServerStatusesEnum.rewardReverted:
      return TransactionServerStatusesEnum.fail;
    default:
      return transaction.status.toString();
  }
};
