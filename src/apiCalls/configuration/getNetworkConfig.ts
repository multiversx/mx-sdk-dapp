import axios from 'axios';
import { NETWORK_CONFIG_ENDPOINT } from 'apiCalls/endpoints';
import { getCleanApiAddress } from 'apiCalls/utils';
import { ApiNetworkConfigType } from 'types';

export async function getNetworkConfigFromApi() {
  const apiAddress = getCleanApiAddress();

  const configUrl = `${apiAddress}/${NETWORK_CONFIG_ENDPOINT}`;

  try {
    const { data } = await axios.get<{
      data: { config: ApiNetworkConfigType };
    }>(configUrl);
    if (data != null) {
      return data?.data?.config;
    }
  } catch (err) {
    console.error('error fetching configuration for ', configUrl);
  }
  return null;
}
