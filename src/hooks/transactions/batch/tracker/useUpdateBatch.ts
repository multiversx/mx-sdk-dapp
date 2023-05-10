import { useCallback } from 'react';
import { useSelector } from 'reduxStore/DappProviderContext';
import { signedTransactionsSelector } from 'reduxStore/selectors';
import { updateSignedTransactionStatus } from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import { getTransactionsDetails } from 'services/transactions/getTransactionsDetails';
import { TransactionServerStatusesEnum } from 'types';
import { refreshAccount } from 'utils/account/refreshAccount';
import { sequentialToFlatArray } from 'utils/transactions/batch/sequentialToFlatArray';
import { useGetBatches } from '../useGetBatches';

export function useUpdateBatch() {
  const { batchTransactionsArray } = useGetBatches();
  const signedTransactions = useSelector(signedTransactionsSelector);

  return useCallback(
    async (props?: {
      batchId: string;
      isBatchFailed?: boolean;
      dropUnprocessedTransactions?: boolean;
      shouldRefreshBalance?: boolean;
    }) => {
      if (!props) {
        return;
      }

      const batch = batchTransactionsArray.find(
        (batch) => batch.batchId === props.batchId
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

      if (props.isBatchFailed) {
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

      console.log({
        props,
        transactions,
        transactionsFlatArray
      });

      const { data, success } = await getTransactionsDetails(
        transactionsFlatArray
          .map(({ hash }) => hash)
          .filter((hash) => Boolean(hash))
      );

      if (success && data) {
        for (const transaction of transactionsFlatArray) {
          const apiTx = data.find((tx) => tx.txHash === transaction.hash);

          if (!apiTx) {
            if (props.dropUnprocessedTransactions) {
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
      } else {
        for (const transaction of transactionsFlatArray) {
          if (!signedTransactions) {
            continue;
          }

          const signedTransaction = signedTransactions[
            sessionId
          ]?.transactions?.find((tx) => tx.signature === transaction.signature);

          if (!signedTransaction) {
            continue;
          }

          store.dispatch(
            updateSignedTransactionStatus({
              sessionId,
              status: TransactionServerStatusesEnum.notExecuted,
              transactionHash: signedTransaction.hash
            })
          );
        }
      }

      if (props.shouldRefreshBalance) {
        await refreshAccount();
      }
    },
    [batchTransactionsArray]
  );
}
