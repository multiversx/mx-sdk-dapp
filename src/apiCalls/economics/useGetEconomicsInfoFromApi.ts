import { useApiFetch } from '../utils';
import { ECONOMICS_ENDPOINT } from '../endpoints';

export const useGetEconomicsInfoFromApi = () =>
  useApiFetch({ apiEndpoint: ECONOMICS_ENDPOINT });
