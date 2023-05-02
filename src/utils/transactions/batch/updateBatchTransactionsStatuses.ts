import { checkBatch } from 'hooks/transactions/useCheckTransactionStatus/checkBatch';
import {
  CustomTransactionInformation,
  SignedTransactionType,
  TransactionServerStatusesEnum
} from 'types';
import { getIsSequential } from './getIsSequential';
import { sequentialToFlatArray } from './sequentialToFlatArray';
import { store } from 'reduxStore/store';
import {
  clearBatchTransactions,
  updateSignedTransactionStatus
} from 'reduxStore/slices';

export async function updateBatchTransactionsStatuses({
  batchId,
  sessionId,
  transactions,
  customTransactionInformation
}: {
  batchId: string;
  sessionId: string;
  transactions: SignedTransactionType[] | SignedTransactionType[][];
  customTransactionInformation?: CustomTransactionInformation;
}) {
  const isSequential = getIsSequential({ transactions });
  const transactionsArray = sequentialToFlatArray({ transactions });

  const batchIsSuccessful = transactionsArray.every(
    (transaction) =>
      transaction.status === TransactionServerStatusesEnum.success
  );

  if (transactionsArray.length === 0) {
    return;
  }

  for (const transaction of transactionsArray) {
    const { hash, status } = transaction;

    store.dispatch(
      updateSignedTransactionStatus({
        sessionId,
        status,
        transactionHash: hash
      })
    );
  }

  if (batchIsSuccessful) {
    store.dispatch(clearBatchTransactions({ batchId }));
    return;
  }

  await checkBatch({
    sessionId,
    transactionBatch: {
      transactions: transactionsArray,
      customTransactionInformation
    },
    isSequential
  });
}
