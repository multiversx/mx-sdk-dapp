import { checkBatch } from 'hooks/transactions/useCheckTransactionStatus/checkBatch';
import { CustomTransactionInformation, SignedTransactionType } from 'types';
import { getIsSequential } from './getIsSequential';
import { sequentialToFlatArray } from './sequentialToFlatArray';

export async function updateBatchTransactionsStatuses({
  sessionId,
  transactions,
  customTransactionInformation
}: {
  sessionId: string;
  transactions: SignedTransactionType[] | SignedTransactionType[][];
  customTransactionInformation?: CustomTransactionInformation;
}) {
  const isSequential = getIsSequential({ transactions });
  const transactionsArray = sequentialToFlatArray({ transactions });

  await checkBatch({
    sessionId,
    transactionBatch: {
      transactions: transactionsArray,
      customTransactionInformation
    },
    isSequential
  });
}
