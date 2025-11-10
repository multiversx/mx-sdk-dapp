import axios from 'axios';
import { NetworkType } from 'types/network.types';
import { CONFIG_ENDPOINT } from '../endpoints';

export async function getServerConfiguration(apiAddress: string) {
  const configUrl = `${apiAddress}/${CONFIG_ENDPOINT}`;

  try {
    const { data } = await axios.get<NetworkType>(configUrl);
    console.log('data', data);
    if (data != null) {
      // egldDenomination will be removed from API when dapp-core v1 will be discontinued
      const egldDenomination = 'egldDenomination';
      if (egldDenomination in data) {
        const {
          [egldDenomination]: decimals,
          decimals: digits,
          ...rest
        } = data as NetworkType & {
          [egldDenomination]: string;
        };
        const networkConfig: NetworkType = {
          ...rest,
          decimals,
          digits
        };
        return networkConfig;
      }
      return data;
    }
  } catch (_err) {
    console.error('error fetching configuration for ', configUrl);
  }
  return null;
}
