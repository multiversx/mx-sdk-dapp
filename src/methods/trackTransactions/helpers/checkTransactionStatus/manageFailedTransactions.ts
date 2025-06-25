import {
  updateTransactionStatus,
  updateSessionStatus
} from 'store/actions/transactions/transactionsActions';
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
