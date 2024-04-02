import axios from 'axios';
import { networkConfigSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import { ScamInfoType } from 'types/account.types';
import { ACCOUNTS_ENDPOINT } from '../endpoints';

export async function getScamAddressData(addressToVerify: string) {
  const {
    network: { apiAddress, apiTimeout }
  } = networkConfigSelector(store.getState());
  const { data } = await axiosInstance.get<{
    scamInfo?: ScamInfoType;
    code?: string;
  }>(`/${ACCOUNTS_ENDPOINT}/${addressToVerify}`, {
    baseURL: apiAddress,
    timeout: Number(apiTimeout)
  });

  return data;
}
