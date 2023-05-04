import { updateBatchTransactions } from 'reduxStore/slices';
import { useCallback } from 'react';
import { useResolveBatchStatusResponse } from '../useResolveBatchStatusResponse';
import { useDispatch } from 'reduxStore/DappProviderContext';

export function useCheckBatch() {
  const dispatch = useDispatch();
  const resolveBatchStatusResponse = useResolveBatchStatusResponse();

  return useCallback(
    async ({ batchId }: { batchId: string }) => {
      const batchData = await resolveBatchStatusResponse({
        batchId
      });

      if (!batchData.statusResponse) {
        return null;
      }

      dispatch(updateBatchTransactions(batchData.statusResponse));
      return batchData;
    },
    [dispatch, resolveBatchStatusResponse]
  );
}
