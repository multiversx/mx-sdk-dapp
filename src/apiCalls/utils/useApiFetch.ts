import useSWR from 'swr';
import { axiosFetcher } from './axiosFetcher';
import { getCleanApiAddress } from './getCleanApiAddress';

export const useApiFetch = ({
  apiEndpoint
}: {
  apiEndpoint: string | null;
}) => {
  const apiAddress = getCleanApiAddress();
  const url = apiEndpoint ? `${apiAddress}/${apiEndpoint}` : null;

  return useSWR(url, axiosFetcher);
};
