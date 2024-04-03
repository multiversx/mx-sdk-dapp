import { ECONOMICS_ENDPOINT } from '../endpoints';
import { useApiFetch } from '../utils';

export const useGetEconomicsInfoFromApi = () =>
  useApiFetch({ apiEndpoint: ECONOMICS_ENDPOINT });
