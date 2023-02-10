import axios from 'axios';
import { BLOCKS_ENDPOINT } from 'apiCalls/endpoints';

interface GetLatestBlockHashResponseType {
  hash: string;
  timestamp: number;
}

const cachingDurationMS = 50000; // 50 seconds, a block hash is valid for 1 minute from its generation
let cachingExpiresAt: number | null = null;
let cachedResponse: GetLatestBlockHashResponseType | null = null;

export async function getLatestBlockHash(
  apiUrl: string
): Promise<GetLatestBlockHashResponseType> {
  if (apiUrl == null) {
    throw new Error('missing api url');
  }
  const isCachedValueValid =
    cachingExpiresAt != null && Date.now() < cachingExpiresAt;

  if (isCachedValueValid && cachedResponse != null) {
    return cachedResponse;
  } else {
    const response = await getLatestBlockHashFromServer(apiUrl);
    cachedResponse = response;
    cachingExpiresAt = Date.now() + cachingDurationMS;
    return response;
  }
}

export async function getLatestBlockHashFromServer<
  T = { hash: string; timestamp: number }
>(apiUrl: string): Promise<T> {
  const { data } = await axios.get<Array<T>>(
    `${apiUrl}/${BLOCKS_ENDPOINT}?size=1&fields=hash,timestamp`
  );
  const [latestBlock] = data;
  return latestBlock;
}
