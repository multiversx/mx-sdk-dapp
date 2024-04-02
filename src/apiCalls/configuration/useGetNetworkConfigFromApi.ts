import { useApiFetch } from '../utils';
import { NETWORK_CONFIG_ENDPOINT } from '../endpoints';

export const useGetNetworkConfigFromApi = () =>
  useApiFetch({
    apiEndpoint: NETWORK_CONFIG_ENDPOINT
  });
