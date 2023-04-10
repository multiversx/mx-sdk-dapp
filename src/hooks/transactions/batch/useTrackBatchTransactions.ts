import { useCallback, useEffect, useRef } from 'react';
import { getBatchTransactionsStatus } from 'services/transactions/getBatchTransactionsStatus';
import { BatchTransactionStatus, BatchTransactionsWSResponseType } from 'types';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { updateBatchTransactions } from 'reduxStore/slices';
import { useRegisterWebsocketListener } from 'hooks/websocketListener';
import { useCheckBatchTransactionsStatuses } from './useCheckBatchTransactionsStatuses';
import { useGetAccount } from 'hooks/account';

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
  const checkBatchTransactionsStatuses = useCheckBatchTransactionsStatuses();

  const dispatch = useDispatch();
  const stopPollingRef = useRef<boolean>(true);

  const { address } = useGetAccount();

  const getBatchStatus = useCallback(
    async (id: string) => {
      try {
        return await getBatchTransactionsStatus({
          apiAddress,
          batchId: id,
          address
        });
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    [apiAddress, address]
  );

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

  const onMessage = useCallback(() => {
    // Do nothing, used for backwards compatibility to avoid breaking changes
    // Will be removed in the next major release
  }, []);

  const onBatchUpdate = useCallback(
    async (data: BatchTransactionsWSResponseType) => {
      await verifyBatchStatus({ batchId: data.batchId });

      await checkBatchTransactionsStatuses({
        batchId: data.batchId,
        shouldRefreshBalance: true
      });
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

      await verifyBatchStatus({ batchId });
      await checkBatchTransactionsStatuses({
        batchId,
        shouldRefreshBalance: true
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [batchId, verifyBatchStatus, stopPollingRef.current]);

  return {
    getBatchStatus
  };
};
