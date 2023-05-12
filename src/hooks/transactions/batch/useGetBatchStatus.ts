import { useCallback } from 'react';
import { useGetAccount } from 'hooks/account';
import { getBatchTransactionsStatus } from 'services/transactions/getBatchTransactionsStatus';

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
