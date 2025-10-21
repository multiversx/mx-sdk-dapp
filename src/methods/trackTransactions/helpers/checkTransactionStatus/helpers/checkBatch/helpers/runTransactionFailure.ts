import { updateSessionStatus } from 'store/actions/transactions/transactionsActions';
import { getIsTransactionPending } from 'store/actions/transactions/transactionStateByStatus';
import { getState } from 'store/store';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import { SignedTransactionType } from 'types/transactions.types';
import { runSessionCallbacks } from './runSessionCallbacks';
import { updateTransactionAndSessionStatus } from './updateTransactionAndSessionStatus';

export async function manageFailedTransactions({
  transaction,
  sessionId
}: {
  transaction: SignedTransactionType;
  sessionId: string;
}) {
  const resultWithError = transaction.results?.find(
    (result) => result?.returnMessage !== ''
  );

  updateTransactionAndSessionStatus({
    sessionId,
    transaction: {
      ...transaction,
      status: TransactionServerStatusesEnum.fail,
      inTransit: false
    }
  });

  const { transactions: sessions } = getState();
  const session = sessions?.[sessionId];

  const hasPendingTransactions = session?.transactions?.some((tx) =>
    getIsTransactionPending(tx.status)
  );

  if (!hasPendingTransactions) {
    updateSessionStatus({
      sessionId,
      status: TransactionBatchStatusesEnum.fail,
      errorMessage: resultWithError?.returnMessage
    });

    await runSessionCallbacks({
      sessionId,
      status: TransactionBatchStatusesEnum.fail
    });
  }
}
