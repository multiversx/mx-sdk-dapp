import axios from 'axios';
import { CONFIG_ENDPOINT } from 'apiCalls/endpoints';
import { NetworkType } from 'types';

export async function getServerConfiguration(apiAddress: string) {
  const configUrl = `${apiAddress}/${CONFIG_ENDPOINT}`;

  try {
    const { data } = await axios.get<NetworkType>(configUrl);
    if (data != null) {
      // TODO: egldDenomination will be removed from API when dapp-core v1 will be disontinued
      if ('egldDenomination' in data) {
        data.decimals = data['egldDenomination'];
        data.digits = data['decimals'];
        delete data['egldDenomination'];
      }
      return data;
    }
  } catch (err) {
    console.error('error fetching configuration for ', configUrl);
  }
  return null;
}
