import { useCallback } from 'react';
import { BatchTransactionStatus } from 'types';
import { useGetBatchStatus } from './useGetBatchStatus';

export const useResolveBatchStatusResponse = () => {
  const getBatchStatus = useGetBatchStatus();

  return useCallback(
    async ({ batchId }: { batchId: string }) => {
      const statusResponse = await getBatchStatus(batchId);

      if (!statusResponse) {
        return {
          statusResponse,
          isBatchSuccessful: false,
          isBatchFailed: true,
          isBatchNotFound: false
        };
      }

      return {
        statusResponse,
        isBatchSuccessful:
          statusResponse.status === BatchTransactionStatus.success,
        isBatchFailed:
          statusResponse.status === BatchTransactionStatus.fail ||
          statusResponse.status === BatchTransactionStatus.invalid ||
          statusResponse.status === BatchTransactionStatus.dropped,
        isBatchNotFound:
          Boolean(statusResponse.statusCode) && Boolean(statusResponse.message)
      };
    },
    [getBatchStatus]
  );
};
