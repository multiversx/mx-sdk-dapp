import axios from 'axios';
import { NetworkType } from 'types';
import { configEndpoint } from 'apiCalls/endpoints';
import { getCleanApiAddress } from 'apiCalls/utils';

export async function getServerConfiguration(customApiAddress?: string) {
  const apiAddress = getCleanApiAddress(customApiAddress);

  const configUrl = `${apiAddress}/${configEndpoint}`;

  try {
    const { data } = await axios.get<NetworkType>(configUrl);
    if (data != null) {
      return data;
    }
  } catch (err) {
    console.error('error fetching configuration for ', configUrl);
  }
  return null;
}
