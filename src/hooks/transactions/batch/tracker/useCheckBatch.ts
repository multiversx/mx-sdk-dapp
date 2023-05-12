import { useCallback } from 'react';
import { useDispatch } from 'reduxStore/DappProviderContext';
import { updateBatchTransactions } from 'reduxStore/slices';
import { useResolveBatchStatusResponse } from '../useResolveBatchStatusResponse';

export function useCheckBatch() {
  const dispatch = useDispatch();
  const resolveBatchStatusResponse = useResolveBatchStatusResponse();

  return useCallback(
    async ({ batchId }: { batchId: string }) => {
      const batchData = await resolveBatchStatusResponse({
        batchId
      });

      if (batchData.statusResponse) {
        dispatch(updateBatchTransactions(batchData.statusResponse));
      }

      return batchData;
    },
    [dispatch, resolveBatchStatusResponse]
  );
}
