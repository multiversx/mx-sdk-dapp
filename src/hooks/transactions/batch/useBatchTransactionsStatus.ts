import { useEffect, useState } from 'react';
import { BatchTransactionStatus } from 'types';
import { useSelector } from 'reduxStore/DappProviderContext';
import { batchesSelector } from 'reduxStore/selectors/batchTransactionsSelectors';

export const useBatchTransactionsStatus = ({
  batchId
}: {
  batchId: string;
}) => {
  const batches = useSelector(batchesSelector);
  const [batchStatus, setBatchStatus] = useState<BatchTransactionStatus>();

  useEffect(() => {
    if (batchId) {
      setBatchStatus(batches[batchId]?.status);
    }
  }, [batchId, batches]);

  return {
    batchStatus
  };
};
