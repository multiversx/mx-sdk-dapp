import { BatchTransactionStatus, CustomTransactionInformation } from 'types';
import { refreshAccount } from 'utils/account/refreshAccount';
import { updateBatchTransactionsStatuses } from 'utils/transactions/batch/updateBatchTransactionsStatuses';
import { useGetBatches } from './useGetBatches';

export function useUpdateBatches() {
  const { batches, batchTransactionsArray } = useGetBatches();

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

    if (pendingBatches.length === 0) {
      return;
    }

    for (const { batchId, transactions } of pendingBatches) {
      const [sessionId] = batchId.split('-');

      await updateBatchTransactionsStatuses({
        sessionId,
        transactions,
        customTransactionInformation: props?.customTransactionInformation
      });
    }

    if (props?.shouldRefreshBalance) {
      refreshAccount();
    }
  }

  return checkBatchesTransactionsStatuses;
}
