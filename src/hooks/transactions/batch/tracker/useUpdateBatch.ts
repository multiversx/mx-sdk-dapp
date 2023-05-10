import { useCallback } from 'react';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { signedTransactionsSelector } from 'reduxStore/selectors';
import { updateSignedTransactionStatus } from 'reduxStore/slices';
import { getTransactionsDetails } from 'services/transactions/getTransactionsDetails';
import {
  ServerTransactionType,
  SignedTransactionType,
  TransactionServerStatusesEnum
} from 'types';
import { refreshAccount } from 'utils/account/refreshAccount';
import { sequentialToFlatArray } from 'utils/transactions/batch/sequentialToFlatArray';
import { useGetBatches } from '../useGetBatches';

export function useUpdateBatch() {
  const dispatch = useDispatch();
  const { batchTransactionsArray } = useGetBatches();
  const signedTransactions = useSelector(signedTransactionsSelector);

  const handleBatchErrors = useCallback(
    ({
      sessionId,
      batchTransactions
    }: {
      sessionId: string;
      batchTransactions: SignedTransactionType[];
    }) => {
      for (const transaction of batchTransactions) {
        if (!signedTransactions) {
          continue;
        }

        const signedTransaction = signedTransactions[
          sessionId
        ]?.transactions?.find((tx) => tx.signature === transaction.signature);

        if (!signedTransaction) {
          continue;
        }

        dispatch(
          updateSignedTransactionStatus({
            sessionId,
            status: TransactionServerStatusesEnum.notExecuted,
            transactionHash: signedTransaction.hash
          })
        );
      }
    },
    [dispatch, signedTransactions]
  );

  const handleBatchSuccess = useCallback(
    ({
      sessionId,
      dropUnprocessedTransactions,
      serverTransactions,
      batchTransactions
    }: {
      sessionId: string;
      dropUnprocessedTransactions?: boolean;
      serverTransactions: ServerTransactionType[];
      batchTransactions: SignedTransactionType[];
    }) => {
      for (const transaction of batchTransactions) {
        const apiTx = serverTransactions.find(
          (tx) => tx.txHash === transaction.hash
        );

        if (!apiTx) {
          if (dropUnprocessedTransactions) {
            dispatch(
              updateSignedTransactionStatus({
                sessionId,
                status: TransactionServerStatusesEnum.fail,
                transactionHash: transaction.hash
              })
            );
          }
          continue;
        }

        dispatch(
          updateSignedTransactionStatus({
            sessionId,
            status: apiTx.status as TransactionServerStatusesEnum,
            transactionHash: transaction.hash
          })
        );
      }
    },
    [dispatch]
  );

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
          dispatch(
            updateSignedTransactionStatus({
              sessionId,
              status: TransactionServerStatusesEnum.fail,
              transactionHash: transaction.hash
            })
          );
        }
        return;
      }

      const { data, success } = await getTransactionsDetails(
        transactionsFlatArray
          .map(({ hash }) => hash)
          .filter((hash) => Boolean(hash))
      );

      if (success && data) {
        handleBatchSuccess({
          sessionId,
          dropUnprocessedTransactions: props.dropUnprocessedTransactions,
          serverTransactions: data,
          batchTransactions: transactionsFlatArray
        });
      } else {
        handleBatchErrors({
          sessionId,
          batchTransactions: transactionsFlatArray
        });
      }

      if (props.shouldRefreshBalance) {
        await refreshAccount();
      }
    },
    [dispatch, batchTransactionsArray]
  );
}
