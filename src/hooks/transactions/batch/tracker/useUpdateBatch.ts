import { refreshAccount } from 'utils/account/refreshAccount';
import { useGetBatches } from '../useGetBatches';
import { sequentialToFlatArray } from 'utils/transactions/batch/sequentialToFlatArray';
import { store } from 'reduxStore/store';
import { updateSignedTransactionStatus } from 'reduxStore/slices';
import { TransactionServerStatusesEnum } from 'types';
import { getTransactionsDetails } from 'services/transactions/getTransactionsDetails';
import { useCallback } from 'react';

export function useUpdateBatch() {
  const { batches, batchTransactionsArray } = useGetBatches();

  return useCallback(
    async (props?: {
      batchId: string;
      isBatchFailed?: boolean;
      dropUnprocessedTransactions?: boolean;
      shouldRefreshBalance?: boolean;
    }) => {
      console.log({
        batches,
        batchTransactionsArray
      });

      const batch = batchTransactionsArray.find(
        (batch) => batch.batchId === props?.batchId
      );
      if (!batch) {
        return;
      }

      const { batchId, transactions } = batch;
      const sessionId = batchId.split('-')[0];
      if (!sessionId) {
        return;
      }

      const transactionsFlatArray = sequentialToFlatArray({ transactions });
      if (transactionsFlatArray.length === 0) {
        return;
      }

      // drop toast transactions if batch failed
      // iterate through all transactions in a batch and set toast status to fail
      if (props?.isBatchFailed) {
        for (const transaction of transactionsFlatArray) {
          store.dispatch(
            updateSignedTransactionStatus({
              sessionId,
              status: TransactionServerStatusesEnum.fail,
              transactionHash: transaction.hash
            })
          );
        }
        return;
      }

      // TODO check every transactions in a batch using the public API: /transactions/{txHash}
      // iterate through all transactions in a batch and check if they are all successful and set isBatchSuccessful to true
      const { data, success } = await getTransactionsDetails(
        transactionsFlatArray.map(({ hash }) => hash)
      );

      if (success && data) {
        for (const transaction of transactionsFlatArray) {
          const apiTx = data.find((tx) => tx.txHash === transaction.hash);

          if (!apiTx) {
            if (props?.dropUnprocessedTransactions) {
              store.dispatch(
                updateSignedTransactionStatus({
                  sessionId,
                  status: TransactionServerStatusesEnum.fail,
                  transactionHash: transaction.hash
                })
              );
            }
            continue;
          }

          store.dispatch(
            updateSignedTransactionStatus({
              sessionId,
              status: apiTx.status as TransactionServerStatusesEnum,
              transactionHash: transaction.hash
            })
          );
        }
      }

      if (props?.shouldRefreshBalance) {
        await refreshAccount();
      }
    },
    [batchTransactionsArray]
  );
}
