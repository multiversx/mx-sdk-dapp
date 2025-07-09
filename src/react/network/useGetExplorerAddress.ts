import { useGetNetworkConfig } from './useGetNetworkConfig';

export const useGetExplorerAddress = () => {
  const { network } = useGetNetworkConfig();
  return network.explorerAddress;
};
