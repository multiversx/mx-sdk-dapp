import { getTransactionsSessionStatus } from 'managers/TransactionManager/helpers/getTransactionsStatus';
import {
  updateSessionStatus,
  updateTransactionStatus,
  UpdateTransactionStatusPropsType
} from 'store/actions/transactions/transactionsActions';
import { getState } from 'store/store';
import { TransactionBatchStatusesEnum } from 'types/enums.types';

export function updateTransactionAndSessionStatus({
  sessionId,
  transaction
}: UpdateTransactionStatusPropsType): TransactionBatchStatusesEnum | null {
  updateTransactionStatus({
    sessionId,
    transaction
  });

  const state = getState();
  const transactions = state.transactions?.[sessionId].transactions;

  const status = getTransactionsSessionStatus(transactions);

  if (status) {
    updateSessionStatus({
      sessionId,
      status
    });
  }

  return status;
}
