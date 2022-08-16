import {
  updateSignedTransactions,
  updateSignedTransactionStatus
} from 'reduxStore/slices';
import { getStore } from 'reduxStore/store';
import {
  TransactionBatchStatusesEnum,
  TransactionServerStatusesEnum
} from 'types/enums';
import { SmartContractResult } from 'types';

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

  getStore().dispatch(
    updateSignedTransactionStatus({
      transactionHash: hash,
      sessionId,
      status: TransactionServerStatusesEnum.fail,
      errorMessage: resultWithError?.returnMessage
    })
  );
  getStore().dispatch(
    updateSignedTransactions({
      sessionId,
      status: TransactionBatchStatusesEnum.fail,
      errorMessage: resultWithError?.returnMessage
    })
  );
}
