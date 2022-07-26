import { getAllTransactionsLink } from 'utils';
import { useCallback } from 'react';
import { useGetNetworkConfig } from '../useGetNetworkConfig';

export const useGetAllTransactionsLink = () => {
  const {
    network: { explorerAddress }
  } = useGetNetworkConfig();

  return useCallback(
    (address: string) => getAllTransactionsLink(explorerAddress, address),
    [explorerAddress]
  );
};
