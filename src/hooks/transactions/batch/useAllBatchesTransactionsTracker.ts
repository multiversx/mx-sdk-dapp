import { useCallback, useEffect } from 'react';
import {
  BatchTransactionStatus,
  BatchTransactionsWSResponseType,
  SignedTransactionType
} from 'types';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { updateBatchTransactions } from 'reduxStore/slices';
import { useRegisterWebsocketListener } from 'hooks/websocketListener';
import {
  AVERAGE_TX_DURATION_MS,
  TRANSACTIONS_STATUS_POLLING_INTERVAL
} from 'constants/transactionStatus';
import { useResolveBatchStatusResponse } from './useResolveBatchStatusResponse';
import { useGetBatches } from './useGetBatches';
import { useUpdateBatch } from './useUpdateBatch';
import { checkBatch } from '../useCheckTransactionStatus/checkBatch';
import { sequentialToFlatArray } from 'utils/transactions/batch/sequentialToFlatArray';
import { getIsSequential } from 'utils/transactions/batch/getIsSequential';
import { getTransactionsStatus } from 'utils/transactions/batch/getTransactionsStatus';
import { useGetSignedTransactions } from '../useGetSignedTransactions';

export type AllBatchesTransactionsTracker = {
  onSuccess?: (batchId: string | null) => void;
  onFail?: (batchId: string | null, errorMessage?: string) => void;
};

export const useAllBatchesTransactionsTracker = ({
  onSuccess,
  onFail
}: AllBatchesTransactionsTracker) => {
  const dispatch = useDispatch();
  const { signedTransactions } = useGetSignedTransactions();
  const { batches, batchTransactionsArray } = useGetBatches();

  const updateBatch = useUpdateBatch();
  const resolveBatchStatusResponse = useResolveBatchStatusResponse();

  // const pendingBatches = useMemo(
  //   () =>
  //     batchTransactionsArray.filter((batch) => {
  //       const isPending =
  //         batch.batchId != null &&
  //         batches[batch.batchId]?.status === BatchTransactionStatus.pending;
  //       return isPending;
  //     }),
  //   [batchTransactionsArray]
  // );

  const verifyBatchStatus = useCallback(
    async ({ batchId }: { batchId: string }) => {
      const { statusResponse, isBatchSuccessful, isBatchFailed } =
        await resolveBatchStatusResponse({ batchId });

      if (!statusResponse) {
        return;
      }

      dispatch(updateBatchTransactions(statusResponse));

      if (isBatchSuccessful) {
        onSuccess?.(batchId);
      } else if (isBatchFailed) {
        onFail?.(
          batchId,
          `Error processing batch transactions. Status: ${statusResponse?.status}`
        );
      }
    },
    [dispatch, resolveBatchStatusResponse, onSuccess, onFail]
  );

  const onMessage = useCallback(() => {
    // Do nothing, used for backwards compatibility to avoid breaking changes
    // TODO: Will be removed in the next major release
  }, []);

  const onBatchUpdate = useCallback(
    async (data: BatchTransactionsWSResponseType) => {
      await verifyBatchStatus({ batchId: data.batchId });

      await updateBatch({
        batchId: data.batchId,
        shouldRefreshBalance: true
      });
    },
    [verifyBatchStatus]
  );

  const isBatchHanding = useCallback((batchId: string, olderThanMs: number) => {
    const sessionTimestamp = parseInt(batchId.split('-')[0]);

    const diff = new Date().getTime() - sessionTimestamp;

    return diff > olderThanMs;
  }, []);

  const checkHangingBatches = useCallback(async () => {
    for (const { batchId, transactions } of batchTransactionsArray) {
      if (!isBatchHanding(batchId, TRANSACTIONS_STATUS_POLLING_INTERVAL)) {
        continue;
      }

      const sessionId = batchId.split('-')[0];
      if (!sessionId) {
        continue;
      }

      const isSequential = getIsSequential({ transactions });
      const transactionsArray = sequentialToFlatArray({ transactions });

      await checkBatch({
        sessionId,
        transactionBatch: {
          transactions: transactionsArray
        },
        isSequential
      });

      const sessionTransactions = signedTransactions[sessionId]?.transactions;
      const batch = batches[batchId];
      let status = batch.status;

      if (!sessionTransactions) {
        return;
      }

      const { isPending, isSuccessful, isFailed, isIncompleteFailed } =
        getTransactionsStatus({ transactions: sessionTransactions });

      if (isSequential) {
        for (const group of transactions as SignedTransactionType[][]) {
          for (const transaction of group) {
            transaction.status =
              sessionTransactions.find((tx) => tx.hash === transaction.hash)
                ?.status || transaction.status;
          }
        }
      } else {
        for (const transaction of transactions as SignedTransactionType[]) {
          transaction.status =
            sessionTransactions.find((tx) => tx.hash === transaction.hash)
              ?.status || transaction.status;
        }
      }

      switch (true) {
        case isPending: {
          status = BatchTransactionStatus.pending;
          break;
        }
        case isSuccessful: {
          status = BatchTransactionStatus.success;
          break;
        }
        case isFailed:
        case isIncompleteFailed: {
          status = BatchTransactionStatus.invalid;
          break;
        }
        default:
          status = BatchTransactionStatus.dropped;
      }

      dispatch(
        updateBatchTransactions({
          ...batch,
          status,
          transactions
        })
      );
    }
  }, [
    isBatchHanding,
    batches,
    batchTransactionsArray,
    signedTransactions,
    dispatch
  ]);

  const checkAllBatchStatusesOnPageLoad = useCallback(async () => {
    for (const { batchId } of batchTransactionsArray) {
      await verifyBatchStatus({ batchId });

      await updateBatch({
        batchId,
        shouldRefreshBalance: true
      });
    }
  }, [batchTransactionsArray, verifyBatchStatus, updateBatch]);

  useRegisterWebsocketListener(onMessage, onBatchUpdate);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (batchTransactionsArray.length === 0) {
        return;
      }

      checkHangingBatches();
    }, AVERAGE_TX_DURATION_MS);

    return () => clearInterval(interval);
  }, [checkHangingBatches, batchTransactionsArray]);

  useEffect(() => {
    checkAllBatchStatusesOnPageLoad();
  }, [checkAllBatchStatusesOnPageLoad]);
};
