import { SignedTransactionType } from 'types';
import { getIsTransactionPending } from 'utils';

interface PendingTxType {
  hash: string;
  previousStatus: string;
}

export function getPendingTransactions(
  transactions: SignedTransactionType[],
  timedOutHashes: string[]
): PendingTxType[] {
  const pendingTransactions = transactions.reduce(
    (acc: PendingTxType[], { status, hash }) => {
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
