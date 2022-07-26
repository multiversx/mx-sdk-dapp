import { getTransactionLink } from 'utils';
import { useCallback } from 'react';
import { useGetNetworkConfig } from '../useGetNetworkConfig';

export const useGetTransactionLink = () => {
  const {
    network: { explorerAddress }
  } = useGetNetworkConfig();

  return useCallback(
    (transactionHash: string) =>
      getTransactionLink(explorerAddress, transactionHash),
    [explorerAddress]
  );
};
