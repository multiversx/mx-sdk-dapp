import {
  updateTransactionStatus,
  updateSessionStatus
} from 'store/actions/transactions/transactionsActions';
import { getIsTransactionPending } from 'store/actions/transactions/transactionStateByStatus';
import { getStore } from 'store/store';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';
import { ResultType } from 'types/serverTransactions.types';
import { SignedTransactionType } from 'types/transactions.types';
import { runSessionCallbacks } from './runSessionCallbacks';

export async function manageFailedTransactions({
  results,
  hash,
  sessionId
}: {
  results: ResultType[];
  hash: string;
  sessionId: string;
}) {
  const resultWithError = results?.find(
    (scResult) => scResult?.returnMessage !== ''
  );

  updateTransactionStatus({
    sessionId,
    transaction: {
      ...(resultWithError as unknown as SignedTransactionType),
      hash,
      status: TransactionServerStatusesEnum.fail,
      inTransit: false
    }
  });

  const { transactions: sessions } = getStore().getState();
  const session = sessions[sessionId];

  const hasPendingTransactions = session.transactions.some((tx) =>
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
