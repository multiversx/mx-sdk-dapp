import axios from 'axios';
import useSwr from 'swr';

import { EconomicsInfoType } from 'apiCalls';
import { ECONOMICS_ENDPOINT } from 'apiCalls/endpoints';
import { useSelector } from 'reduxStore/DappProviderContext';
import { apiAddressSelector } from 'reduxStore/selectors';

export function useGetEgldPrice() {
  const apiAddress = useSelector(apiAddressSelector);

  const fetcher = (url: string) =>
    axios
      .get<EconomicsInfoType>(url, {
        baseURL: apiAddress
      })
      .then((response) => response.data);

  const { data, error } = useSwr(ECONOMICS_ENDPOINT, fetcher);

  return {
    price: data?.price,
    error
  };
}
