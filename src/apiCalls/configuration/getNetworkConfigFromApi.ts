import axios from 'axios';
import { networkConfigSchema } from 'apiCalls/utils/apiResponseSchemas';
import { validateApiResponse } from 'apiCalls/utils/validateApiResponse';
import { ApiNetworkConfigType } from 'types/network.types';
import { NETWORK_CONFIG_ENDPOINT } from '../endpoints';

const urlIsValid = (url: string) => {
  try {
    return Boolean(new URL(url));
  } catch {
    return false;
  }
};

export async function getNetworkConfigFromApi(apiAddress: string) {
  if (!urlIsValid(apiAddress)) {
    return null;
  }

  const configUrl = `${apiAddress}/${NETWORK_CONFIG_ENDPOINT}`;

  try {
    const { data } = await axios.get<{
      data: { config: ApiNetworkConfigType };
    }>(configUrl);

    if (data != null) {
      const config = data?.data?.config;

      validateApiResponse({
        data: config,
        schema: networkConfigSchema,
        source: NETWORK_CONFIG_ENDPOINT
      });

      return config;
    }
  } catch (_err) {
    console.error('error fetching configuration for ', configUrl);
  }
  return null;
}
