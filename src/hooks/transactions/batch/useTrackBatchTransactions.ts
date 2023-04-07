import { useCallback, useEffect, useRef } from 'react';
import { getBatchTransactionsStatus } from 'services/transactions/getBatchTransactionsStatus';
import { useAxiosInterceptorContext } from 'wrappers';
import { BatchTransactionStatus } from 'types';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { updateBatchTransactions } from 'reduxStore/slices';
import { useBatchTransactionsStatus } from './useBatchTransactionsStatus';

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
  const stopPollingRef = useRef<boolean>(false);

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

  useEffect(() => {
    const interval = setInterval(async () => {
      if (stopPollingRef.current || !batchId) {
        return;
      }

      const batchStatus = await getBatchStatus(batchId);

      if (batchStatus) {
        dispatch(updateBatchTransactions(batchStatus));
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
    }, 6000);

    return () => clearInterval(interval);
  }, [batchId, nativeAuthToken]);

  return {
    getBatchStatus
  };
};
