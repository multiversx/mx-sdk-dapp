import { useGetNetworkConfig } from './useGetNetworkConfig';

export const useGetEgldLabel = () => {
  const { network } = useGetNetworkConfig();
  return network.egldLabel;
};
