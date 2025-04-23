import axios from 'axios';
import { getCleanApiAddress } from 'apiCalls/utils';
import { BaseNetworkType } from 'types/network.types';

interface IGasStationApiResponse {
  lastBlock: number;
  fast: number;
  faster: number;
}

const GAS_STATION_ENDPOINT = 'transactions/ppu';

export async function getGasStationMetadataFromApi(
  shard: number
): Promise<BaseNetworkType['gasStationMetadata'] | null> {
  const apiAddress = getCleanApiAddress();
  const gasStationUrl = `${apiAddress}/${GAS_STATION_ENDPOINT}/${shard}`;

  try {
    const { data } = await axios.get<IGasStationApiResponse>(gasStationUrl);

    if (data) {
      return {
        lastBlock: data.lastBlock,
        fast: data.fast,
        faster: data.faster
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
