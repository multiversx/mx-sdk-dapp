import { refreshAccount } from 'utils/account/refreshAccount';
import { useGetBatchesTransactions } from './useGetBatchesTransactions';
import { CustomTransactionInformation } from 'types';
import { checkSequentialTransactionsStatuses } from 'utils/transactions/batch/checkSequentialTransactionsStatuses';

export function useCheckBatchTransactionsStatuses() {
  const { batchTransactionsArray } = useGetBatchesTransactions();

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

    await checkSequentialTransactionsStatuses({
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
