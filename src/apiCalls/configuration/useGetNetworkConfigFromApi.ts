import { NETWORK_CONFIG_ENDPOINT } from '../endpoints';
import { useApiFetch } from '../utils';

export const useGetNetworkConfigFromApi = () =>
  useApiFetch({
    apiEndpoint: NETWORK_CONFIG_ENDPOINT
  });
