import { refreshAccount } from 'utils/account/refreshAccount';
import { useGetBatchesTransactions } from './useGetBatchesTransactions';
import { checkBatch } from '../useCheckTransactionStatus/checkBatch';
import { BatchTransactionStatus } from 'types';

export function useCheckBatchTransactionsStatuses() {
  const { batches, batchTransactionsArray } = useGetBatchesTransactions();

  async function checkBatchTransactionsStatuses(props?: {
    batchId: string;
    shouldRefreshBalance?: boolean;
  }) {
    const pendingBatches = batchTransactionsArray.filter((batch) => {
      const isPending =
        batch.batchId != null &&
        batch.batchId === props?.batchId &&
        batches[batch.batchId].status === BatchTransactionStatus.pending;
      return isPending;
    });

    console.log('useCheckBatchTransactionsStatuses', {
      batches,
      batchTransactionsArray,
      pendingBatches
    });

    if (pendingBatches.length > 0) {
      for (const { batchId, transactions } of pendingBatches) {
        console.log('checkBatchTransactionsStatuses - pending batches', {
          batchId,
          transactions
        });

        const sessionId = batchId.split('-')[0];
        await checkBatch({
          sessionId,
          transactionBatch: {
            transactions
          }
        });
      }
    }
    if (props?.shouldRefreshBalance) {
      refreshAccount();
    }
  }

  return checkBatchTransactionsStatuses;
}
