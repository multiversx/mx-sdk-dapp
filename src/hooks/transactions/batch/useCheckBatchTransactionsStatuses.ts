import { refreshAccount } from 'utils/account/refreshAccount';
import { useGetBatchesTransactions } from './useGetBatchesTransactions';
import { checkBatch } from '../useCheckTransactionStatus/checkBatch';
import { CustomTransactionInformation } from 'types';
import { sequentialToFlatArray } from 'utils/transactions/sequentialToFlatArray';
import { getIsSequential } from 'utils/transactions/getIsSequential';

export function useCheckBatchTransactionsStatuses() {
  const { batches, batchTransactionsArray } = useGetBatchesTransactions();

  async function checkBatchTransactionsStatuses(props?: {
    batchId: string;
    shouldRefreshBalance?: boolean;
    customTransactionInformation?: CustomTransactionInformation;
  }) {
    const batch = batchTransactionsArray.find(
      (batch) => batch.batchId === props?.batchId
    );

    console.log('useCheckBatchTransactionsStatuses', {
      batches,
      batchTransactionsArray,
      batch
    });

    if (batch) {
      const { batchId, transactions } = batch;

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
    if (props?.shouldRefreshBalance) {
      refreshAccount();
    }
  }

  return checkBatchTransactionsStatuses;
}
