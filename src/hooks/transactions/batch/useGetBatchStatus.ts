import { useCallback } from 'react';
import { getBatchTransactionsStatus } from 'services/transactions/getBatchTransactionsStatus';
import { useGetAccount } from 'hooks/account';

export const useGetBatchStatus = () => {
  const { address } = useGetAccount();

  return useCallback(
    async (id: string) => {
      try {
        return await getBatchTransactionsStatus({
          batchId: id,
          address
        });
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    [address]
  );
};
