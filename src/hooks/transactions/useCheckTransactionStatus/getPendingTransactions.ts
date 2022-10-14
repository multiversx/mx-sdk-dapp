import { SignedTransactionType } from 'types';
import { getIsTransactionPending } from 'utils/transactions/transactionStateByStatus';

export interface PendingTransactionType {
  hash: string;
  previousStatus: string;
}

export function getPendingTransactions(
  transactions: SignedTransactionType[],
  timedOutHashes: string[]
): PendingTransactionType[] {
  const pendingTransactions = transactions.reduce(
    (acc: PendingTransactionType[], { status, hash }) => {
      if (
        hash != null &&
        !timedOutHashes.includes(hash) &&
        getIsTransactionPending(status)
      ) {
        acc.push({
          hash,
          previousStatus: status
        });
      }
      return acc;
    },
    []
  );
  return pendingTransactions;
}
