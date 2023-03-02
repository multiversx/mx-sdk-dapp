import { useGetPendingTransactions } from 'hooks/transactions/useGetPendingTransactions';
import { TransactionServerStatusesEnum } from 'types';

export const useGetLastPendingTransactionHash = (): string => {
  const { hasPendingTransactions, pendingTransactions } =
    useGetPendingTransactions();

  if (!hasPendingTransactions) {
    return '';
  }

  const sortedSessionIdsDesc = Object.keys(pendingTransactions)
    .sort()
    .reverse();

  for (const sessionId of sortedSessionIdsDesc) {
    const batch = pendingTransactions[sessionId];
    const batchWithPendingTx =
      batch.transactions?.filter(
        (tx) => tx.status === TransactionServerStatusesEnum.pending
      ) ?? [];

    if (batchWithPendingTx.length > 0) {
      const lastTransaction = batchWithPendingTx[batchWithPendingTx.length - 1];

      return lastTransaction.hash;
    }
  }

  return '';
};
