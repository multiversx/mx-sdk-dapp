import { useCallback } from 'react';
import { refreshAccount } from 'utils/account/refreshAccount';
import { updateBatchTransactionsStatuses } from 'utils/transactions/batch/updateBatchTransactionsStatuses';
import { useGetBatches } from './useGetBatches';

export function useUpdateBatches() {
  const { batches, batchTransactionsArray } = useGetBatches();

  return useCallback(
    async (props?: { shouldRefreshBalance?: boolean }) => {
      const pendingBatches = batchTransactionsArray.filter(
        (batch) => batch.batchId != null && batches[batch.batchId]
      );

      for (const { batchId, transactions } of pendingBatches) {
        const [sessionId] = batchId.split('-');

        await updateBatchTransactionsStatuses({
          batchId,
          sessionId,
          transactions
        });
      }

      if (props?.shouldRefreshBalance) {
        refreshAccount();
      }
    },
    [batches, batchTransactionsArray]
  );
}
