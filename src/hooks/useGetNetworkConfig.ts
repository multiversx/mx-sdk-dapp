import { useNetworkStore } from 'lib/sdkDappCore';

export const useGetNetworkConfig = () => {
  return useNetworkStore();
};
