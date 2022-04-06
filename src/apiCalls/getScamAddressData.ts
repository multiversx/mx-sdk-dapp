import axios from 'axios';
import { networkConfigSelector } from 'redux/selectors';
import { store } from 'redux/store';

export type ScamInfoType = {
  scamInfo?: {
    type: string;
    info: string;
  };
  code: string;
};

export async function getScamAddressData(addressToVerify: string) {
  const {
    network: { apiAddress, apiTimeout }
  } = networkConfigSelector(store.getState());
  const { data } = await axios.get<ScamInfoType>(
    `/accounts/${addressToVerify}`,
    {
      baseURL: apiAddress,
      timeout: apiTimeout
    }
  );

  return data;
}

export default getScamAddressData;
