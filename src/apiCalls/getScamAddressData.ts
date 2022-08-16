import axios from 'axios';
import { networkConfigSelector } from 'reduxStore/selectors';
import { getStore } from 'reduxStore/store';
import { ScamInfoType } from 'types/account';

export async function getScamAddressData(addressToVerify: string) {
  const {
    network: { apiAddress, apiTimeout }
  } = networkConfigSelector(getStore().getState());
  const { data } = await axios.get<ScamInfoType>(
    `/accounts/${addressToVerify}`,
    {
      baseURL: apiAddress,
      timeout: Number(apiTimeout)
    }
  );

  return data;
}
