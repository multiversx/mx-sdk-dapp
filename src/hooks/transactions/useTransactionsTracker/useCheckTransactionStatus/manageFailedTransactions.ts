import {
  updateSignedTransactions,
  updateSignedTransactionStatus
} from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import { ServerTransactionType, SmartContractResult } from 'types';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums.types';

export function manageFailedTransactions({
  results,
  hash,
  sessionId
}: {
  results: SmartContractResult[];
  hash: string;
  sessionId: string;
}) {
  const resultWithError = results?.find(
    (scResult) => scResult?.returnMessage !== ''
  );

  store.dispatch(
    updateSignedTransactionStatus({
      transactionHash: hash,
      sessionId,
      status: TransactionServerStatusesEnum.fail,
      errorMessage: resultWithError?.returnMessage,
      inTransit: false,
      serverTransaction: resultWithError as unknown as ServerTransactionType
    })
  );
  store.dispatch(
    updateSignedTransactions({
      sessionId,
      status: TransactionBatchStatusesEnum.fail,
      errorMessage: resultWithError?.returnMessage
    })
  );
}
