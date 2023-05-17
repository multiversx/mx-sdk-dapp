import useSwr from 'swr';

import { getEconomics } from 'apiCalls';
import { ECONOMICS_ENDPOINT } from 'apiCalls/endpoints';

export function useGetEgldPrice() {
  const fetcher = (url: string) =>
    getEconomics(url).then((response) => response.data);

  const { data, error } = useSwr(ECONOMICS_ENDPOINT, fetcher);

  return {
    price: data?.price,
    error
  };
}
