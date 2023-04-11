import { refreshAccount } from 'utils/account/refreshAccount';
import { useGetBatches } from './useGetBatches';
import { CustomTransactionInformation } from 'types';
import { updateBatchTransactionsStatuses } from 'utils/transactions/batch/updateBatchTransactionsStatuses';

export function useUpdateBatch() {
  const { batchTransactionsArray } = useGetBatches();

  async function checkBatchTransactionsStatuses(props?: {
    batchId: string;
    shouldRefreshBalance?: boolean;
    customTransactionInformation?: CustomTransactionInformation;
  }) {
    const batch = batchTransactionsArray.find(
      (batch) => batch.batchId === props?.batchId
    );

    if (!batch) {
      return;
    }

    const { batchId, transactions } = batch;
    const [sessionId] = batchId.split('-');

    await updateBatchTransactionsStatuses({
      sessionId,
      transactions,
      customTransactionInformation: props?.customTransactionInformation
    });

    if (props?.shouldRefreshBalance) {
      refreshAccount();
    }
  }

  return checkBatchTransactionsStatuses;
}
