import axios from 'axios';
import { BLOCKS_ENDPOINT } from 'apiCalls/endpoints';
import { retryMultipleTimes } from 'utils/retryMultipleTimes';

export interface LatestBlockHashType {
  hash: string;
  timestamp: number;
}

const cachingDurationMs = 30000; // 30 seconds, a block hash is valid for 1 minute from its generation
//this is an object with .current, so it doesn't get affected by closure and is always a fresh value
const cachedResponse: Record<string, LatestBlockHashType | null> = {
  current: null
};

const requestPromise: {
  current: Promise<LatestBlockHashType> | null;
} = {
  current: null
};

const getLatestBlockHashFromServer = retryMultipleTimes(
  async (
    apiUrl: string,
    blockHashShard?: number
  ): Promise<LatestBlockHashType> => {
    const { data } = await axios.get<Array<LatestBlockHashType>>(
      `${apiUrl}/${BLOCKS_ENDPOINT}?from=3&size=1&fields=hash,timestamp${
        blockHashShard ? '&shard=' + blockHashShard : ''
      }`
    );
    const [latestBlock] = data;
    return latestBlock;
  }
);

export async function getLatestBlockHash(
  apiUrl: string,
  blockHashShard?: number
): Promise<LatestBlockHashType> {
  if (apiUrl == null) {
    throw new Error('missing api url');
  }

  if (
    cachedResponse.current != null &&
    cachedResponse.current.timestamp * 1000 - cachingDurationMs - Date.now() > 0
  ) {
    return cachedResponse.current;
  }
  //this will prevent multiple calls to this function from generating multiple hashes
  if (requestPromise.current != null) {
    //if there is already an await in progress for the API, just return the result of that promise
    return await requestPromise.current;
  }

  //if a promise is not in progress, get a new promise and add it to the promise
  requestPromise.current = getLatestBlockHashFromServer(apiUrl, blockHashShard);
  const response = await requestPromise.current;
  if (response == null) {
    requestPromise.current;
    throw new Error('could not get block hash');
  }
  //set the new response, the new expiry and unlock the regeneration flow for the next expiration period
  cachedResponse.current = {
    hash: response.hash,
    timestamp: response.timestamp
  };

  requestPromise.current = null;
  return response;
}
