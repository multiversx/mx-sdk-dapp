import { refreshAccount } from 'utils/account/refreshAccount';
import { useGetBatchesTransactions } from './useGetBatchesTransactions';
import { checkBatch } from '../useCheckTransactionStatus/checkBatch';
import { BatchTransactionStatus, CustomTransactionInformation } from 'types';
import { getIsSequential } from 'utils/transactions/getIsSequential';
import { sequentialToFlatArray } from 'utils/transactions/sequentialToFlatArray';

export function useCheckBatchesTransactionsStatuses() {
  const { batches, batchTransactionsArray } = useGetBatchesTransactions();

  async function checkBatchesTransactionsStatuses(props?: {
    shouldRefreshBalance?: boolean;
    customTransactionInformation?: CustomTransactionInformation;
  }) {
    const pendingBatches = batchTransactionsArray.filter((batch) => {
      const isPending =
        batch.batchId != null &&
        batches[batch.batchId].status === BatchTransactionStatus.pending;
      return isPending;
    });

    console.log('useCheckBatchesTransactionsStatuses', {
      batches,
      batchTransactionsArray,
      pendingBatches
    });

    if (pendingBatches.length > 0) {
      for (const { batchId, transactions } of pendingBatches) {
        console.log('checkBatchesTransactionsStatuses - pending batches', {
          batchId,
          transactions
        });

        const sessionId = batchId.split('-')[0];
        const isSequential = getIsSequential({ transactions });
        const transactionsArray = sequentialToFlatArray({ transactions });

        await checkBatch({
          sessionId,
          transactionBatch: {
            transactions: transactionsArray,
            customTransactionInformation: props?.customTransactionInformation
          },
          isSequential
        });
      }
    }
    if (props?.shouldRefreshBalance) {
      refreshAccount();
    }
  }

  return checkBatchesTransactionsStatuses;
}
