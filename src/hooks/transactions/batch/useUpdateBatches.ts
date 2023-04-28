import { CustomTransactionInformation } from 'types';
import { refreshAccount } from 'utils/account/refreshAccount';
import { updateBatchTransactionsStatuses } from 'utils/transactions/batch/updateBatchTransactionsStatuses';
import { useGetBatches } from './useGetBatches';
import { useCallback } from 'react';

export function useUpdateBatches() {
  const { batches, batchTransactionsArray } = useGetBatches();

  return useCallback(
    async (props?: {
      shouldRefreshBalance?: boolean;
      customTransactionInformation?: CustomTransactionInformation;
    }) => {
      const pendingBatches = batchTransactionsArray.filter(
        (batch) => batch.batchId != null && batches[batch.batchId]
      );

      for (const { batchId, transactions } of pendingBatches) {
        const [sessionId] = batchId.split('-');

        await updateBatchTransactionsStatuses({
          batchId,
          sessionId,
          transactions,
          customTransactionInformation: props?.customTransactionInformation
        });
      }

      if (props?.shouldRefreshBalance) {
        refreshAccount();
      }
    },
    [batches, batchTransactionsArray]
  );
}
