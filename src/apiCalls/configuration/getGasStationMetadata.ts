import axios from 'axios';
import { getCleanApiAddress } from 'apiCalls/configuration/getCleanApiAddress';
import { GAS_STATION_ENDPOINT } from 'apiCalls/endpoints';
import { NetworkType } from 'types/network.types';

interface IGasStationApiResponse {
  lastBlock: number;
  fast: number;
  faster: number;
}

export async function getGasStationMetadataFromApi(
  shard: number,
  customApiAddress?: string
): Promise<NetworkType['gasStationMetadata'] | null> {
  const apiAddress = getCleanApiAddress(customApiAddress);
  const gasStationUrl = `${apiAddress}/${GAS_STATION_ENDPOINT}/${shard}`;

  try {
    const { data } = await axios.get<IGasStationApiResponse>(gasStationUrl);

    if (data) {
      return {
        [shard]: {
          lastBlock: data.lastBlock,
          fast: data.fast,
          faster: data.faster
        }
      };
    }
    return null;
  } catch (err) {
    console.error(
      'Error fetching gas station metadata from:',
      gasStationUrl,
      err
    );
    return null;
  }
}
