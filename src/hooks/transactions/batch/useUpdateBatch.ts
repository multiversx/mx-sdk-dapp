import { refreshAccount } from 'utils/account/refreshAccount';
import { updateBatchTransactionsStatuses } from 'utils/transactions/batch/updateBatchTransactionsStatuses';
import { useGetBatches } from './useGetBatches';

export function useUpdateBatch() {
  const { batchTransactionsArray } = useGetBatches();

  function checkBatchTransactionsStatuses(props?: {
    batchId: string;
    shouldRefreshBalance?: boolean;
  }) {
    const batch = batchTransactionsArray.find(
      (batch) => batch.batchId === props?.batchId
    );

    if (!batch) {
      return;
    }

    const { batchId, transactions } = batch;
    const [sessionId] = batchId.split('-');

    updateBatchTransactionsStatuses({
      batchId,
      sessionId,
      transactions
    });

    if (props?.shouldRefreshBalance) {
      refreshAccount();
    }
  }

  return checkBatchTransactionsStatuses;
}
