import { useCallback, useEffect, useRef } from 'react';
import { getBatchTransactionsStatus } from 'services/transactions/getBatchTransactionsStatus';
import { useAxiosInterceptorContext } from 'wrappers';
import { BatchTransactionStatus, BatchTransactionsWSResponseType } from 'types';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { updateBatchTransactions } from 'reduxStore/slices';
import { useBatchTransactionsStatus } from './useBatchTransactionsStatus';
import { useRegisterWebsocketListener } from 'hooks/websocketListener';

type TrackBatchTransactionsStatusProps = {
  apiAddress: string;
  batchId: string | null;
  onSuccess?: (batchId: string | null) => void;
  onFail?: (batchId: string | null, errorMessage?: string) => void;
};

export const useTrackBatchTransactions = ({
  apiAddress,
  batchId,
  onSuccess,
  onFail
}: TrackBatchTransactionsStatusProps) => {
  useBatchTransactionsStatus({ batchId: batchId ?? '' });

  const dispatch = useDispatch();
  const stopPollingRef = useRef<boolean>(true);

  const { loginInfo } = useAxiosInterceptorContext();
  const nativeAuthToken = loginInfo?.tokenLogin?.nativeAuthToken;

  const getBatchStatus = useCallback(
    async (id: string) => {
      try {
        return await getBatchTransactionsStatus({
          apiAddress,
          batchId: id,
          bearerToken: nativeAuthToken ?? ''
        });
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    [apiAddress, nativeAuthToken]
  );

  // const verifyBatchTransactionsIndividually = useCallback(() => {}, []);

  const verifyBatchStatus = useCallback(
    async ({ batchId }: { batchId: string }) => {
      const batchStatus = await getBatchStatus(batchId);

      if (batchStatus) {
        dispatch(updateBatchTransactions(batchStatus));
      } else {
        stopPollingRef.current = true;
        return;
      }

      if (batchStatus?.status === BatchTransactionStatus.success) {
        stopPollingRef.current = true;
        onSuccess?.(batchId);
      } else if (
        batchStatus?.status === BatchTransactionStatus.invalid ||
        batchStatus?.status === BatchTransactionStatus.dropped
      ) {
        stopPollingRef.current = true;
        onFail?.(
          batchId,
          `Error processing batch transactions. Status: ${batchStatus?.status}`
        );
      } else if (
        Boolean(batchStatus?.statusCode) &&
        Boolean(batchStatus?.message)
      ) {
        stopPollingRef.current = true;
      }
    },
    [getBatchStatus, onSuccess, onFail, stopPollingRef.current]
  );

  const onMessage = useCallback(
    (message: string) => {
      if (message.includes('transactionCompleted')) {
        verifyBatchStatus({ batchId: batchId ?? '' });
      }
    },
    [verifyBatchStatus, batchId]
  );

  const onBatchUpdate = useCallback(
    async (data: BatchTransactionsWSResponseType) => {
      await verifyBatchStatus({ batchId: data.batchId });

      // TODO
      // Get every transaction from the batch and verify if it's completed
      // If it's completed, update the transaction status in redux store to reflect the new status in the toast
    },
    [verifyBatchStatus, batchId]
  );

  useRegisterWebsocketListener(onMessage, onBatchUpdate);

  useEffect(() => {
    const interval = setTimeout(async () => {
      stopPollingRef.current = false;
    }, 30000);
    return () => {
      clearInterval(interval);
    };
  }, [onMessage, stopPollingRef.current]);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (stopPollingRef.current || !batchId) {
        return;
      }

      verifyBatchStatus({ batchId });
    }, 6000);

    return () => clearInterval(interval);
  }, [batchId, verifyBatchStatus, stopPollingRef.current]);

  return {
    getBatchStatus
  };
};
