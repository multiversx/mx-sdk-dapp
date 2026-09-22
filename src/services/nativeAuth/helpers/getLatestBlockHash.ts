import axios from 'axios';
import { BLOCKS_ENDPOINT } from 'apiCalls/endpoints';
import { retryMultipleTimes } from 'utils/retryMultipleTimes';

export interface LatestBlockHashType {
  hash: string;
  timestamp: number;
}

const getBlockFromPosition = 4;
const cachingDurationMs = 30000; // 30 seconds, a block hash is valid for 1 minute from its generation

const cachedResponses = new Map<string, LatestBlockHashType>();
const pendingRequests = new Map<string, Promise<LatestBlockHashType>>();

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

    //get the penultimate block hash (3 shards + the meta chain) to make sure that the block is seen by auth server
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

  const cacheKey = `${apiAddress}|${blockHashShard ?? ''}`;
  const cachedResponse = cachedResponses.get(cacheKey);

  if (
    !noCache &&
    cachedResponse != null &&
    Date.now() < cachedResponse.timestamp * 1000 + cachingDurationMs
  ) {
    return cachedResponse;
  }

  const pendingRequest = pendingRequests.get(cacheKey);

  if (!noCache && pendingRequest != null) {
    return await pendingRequest;
  }

  const request = (async () => {
    const response = await getLatestBlockHashFromServer(
      apiAddress,
      blockHashShard,
      getBlockHash
    );

    if (response == null) {
      throw new Error('could not get block hash');
    }

    const latestBlockHash = {
      hash: response.hash,
      timestamp: response.timestamp
    };

    cachedResponses.set(cacheKey, latestBlockHash);

    return latestBlockHash;
  })();

  pendingRequests.set(cacheKey, request);

  try {
    return await request;
  } finally {
    if (pendingRequests.get(cacheKey) === request) {
      pendingRequests.delete(cacheKey);
    }
  }
}
