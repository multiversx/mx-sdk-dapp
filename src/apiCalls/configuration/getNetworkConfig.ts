import axios from 'axios';
import { BlockchainNetworkConfigType } from 'types';
import { networkConfigEndpoint } from 'apiCalls/endpoints';
import { getCleanApiAddress } from 'apiCalls/utils';

export async function getNetworkConfigFromApi() {
  const apiAddress = getCleanApiAddress();

  const configUrl = `${apiAddress}/${networkConfigEndpoint}`;

  try {
    const { data } = await axios.get<{
      data: { config: BlockchainNetworkConfigType };
    }>(configUrl);
    if (data != null) {
      return data?.data?.config;
    }
  } catch (err) {
    console.error('error fetching configuration for ', configUrl);
  }
  return null;
}
