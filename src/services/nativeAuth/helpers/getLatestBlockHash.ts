import axios from 'axios';
import { BLOCKS_ENDPOINT } from 'apiCalls/endpoints';
import { retryMultipleTimes } from 'utils/retryMultipleTimes';

export interface LatestBlockHashType {
  hash: string;
  timestamp: number;
}

const getBlockFromPosition = 4;
const cachingDurationMs = 30000; // cache for 30 seconds (block hash is valid for 1 minute from generation)
// this is an object with .current, so it doesn't get affected by closure and is always a fresh value
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
    blockHashShard?: number,
    getBlockHash?: () => Promise<string>
  ): Promise<LatestBlockHashType | null> => {
    // get current block hash
    if (getBlockHash) {
      const timestamp = Math.floor(Date.now() / 1000);
      const hash = await getBlockHash();

      return { hash, timestamp };
    }

    // get the penultimate block hash (3 shards + the meta chain) to make sure that the block is seen by auth server
    const { data } = await axios.get<Array<LatestBlockHashType>>(
      `${apiUrl}/${BLOCKS_ENDPOINT}?from=${getBlockFromPosition}&size=1&fields=hash,timestamp${
        blockHashShard ? '&shard=' + blockHashShard : ''
      }`
    );
    const [latestBlock] = data;
    return latestBlock;
  }
);

type GetLatestBlockHashType = {
  apiAddress: string;
  blockHashShard?: number;
  getBlockHash: () => Promise<string>;
  noCache?: boolean;
};

export async function getLatestBlockHash({
  apiAddress,
  noCache,
  blockHashShard,
  getBlockHash
}: GetLatestBlockHashType): Promise<LatestBlockHashType> {
  if (apiAddress == null) {
    throw new Error('missing api url');
  }

  const currentTimestampMs = Date.now();
  if (
    cachedResponse.current != null &&
    currentTimestampMs <
      cachedResponse.current.timestamp * 1000 + cachingDurationMs &&
    !noCache
  ) {
    return cachedResponse.current;
  }
  // this will prevent multiple calls to this function from generating multiple hashes
  if (requestPromise.current != null) {
    // if there is already an await in progress for the API, just return the result of that promise
    return await requestPromise.current;
  }

  // if a promise is not in progress, get a new promise and add it to the promise
  requestPromise.current = getLatestBlockHashFromServer(
    apiAddress,
    blockHashShard,
    getBlockHash
  );

  try {
    const response = await requestPromise.current;
    if (response == null) {
      requestPromise.current = null;
      throw new Error('could not get block hash');
    }
    // set the new response, the new expiry and unlock the regeneration flow for the next expiration period
    cachedResponse.current = {
      hash: response.hash,
      timestamp: response.timestamp
    };

    requestPromise.current = null;
    return response;
  } catch (_error) {
    requestPromise.current = null;
    return null as any;
  }
}
