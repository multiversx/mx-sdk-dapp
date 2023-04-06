import { useCallback, useEffect, useRef } from 'react';
import { getBatchTransactionsStatus } from 'services/transactions/getBatchTransactionsStatus';
import { useAxiosInterceptorContext } from 'wrappers';
import { BatchTransactionStatus } from 'types';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { updateBatchTransactions } from 'reduxStore/slices';

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
  const dispatch = useDispatch();
  const stopPollingRef = useRef<boolean>(true);

  const { loginInfo } = useAxiosInterceptorContext();
  const nativeAuthToken = loginInfo?.tokenLogin?.nativeAuthToken;

  const getBatchStatus = useCallback(async () => {
    try {
      return await getBatchTransactionsStatus({
        apiAddress,
        batchId,
        bearerToken: nativeAuthToken ?? ''
      });
    } catch (error) {
      console.error(error);
      return null;
    }
  }, [nativeAuthToken]);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (stopPollingRef.current) {
        return;
      }

      const batchStatus = await getBatchStatus();

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
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [batchId, nativeAuthToken]);

  return {
    getBatchStatus
  };
};
