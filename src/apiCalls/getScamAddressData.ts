import axios from 'axios';
import { networkConfigSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import { ScamInfoType } from 'types/account';

export async function getScamAddressData(addressToVerify: string) {
  const {
    network: { apiAddress, apiTimeout }
  } = networkConfigSelector(store.getState());
  const { data } = await axios.get<ScamInfoType>(
    `/accounts/${addressToVerify}`,
    {
      baseURL: apiAddress,
      timeout: Number(apiTimeout)
    }
  );

  return data;
}

export default getScamAddressData;
