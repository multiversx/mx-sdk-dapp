import axios from 'axios';
import { BLOCKS_ENDPOINT } from 'apiCalls/endpoints';

interface GetLatestBlockHashResponseType {
  hash: string;
  timestamp: number;
}

const cachingDurationMS = 40000; // 40 seconds, a block hash is valid for 1 minute from its generation
let cachingExpiresAt: number | null = null;
//this is an object with .current, so it doesn't get affected by closure and is always a fresh value
const cachedResponse: Record<string, GetLatestBlockHashResponseType | null> = {
  current: null
};

const isGeneratingNewToken: Record<string, boolean> = { current: false };

export async function getLatestBlockHash(
  apiUrl: string,
  blockHashShard?: number
): Promise<GetLatestBlockHashResponseType> {
  if (apiUrl == null) {
    throw new Error('missing api url');
  }
  const isCachedValueValid =
    cachingExpiresAt != null && Date.now() < cachingExpiresAt;

  if (isCachedValueValid && cachedResponse.current != null) {
    return cachedResponse.current;
  } else {
    //this will prevent multiple calls to this function from generating multiple hashes
    if (isGeneratingNewToken.current) {
      //if there is already an await in progress for the API, just return a Promise that polls the cachedResponse object for the hash
      return await waitForGeneratedToken();
    }
    //lock the generation process
    isGeneratingNewToken.current = true;
    //invalidate the previous cached response, this will also make sure that waitForGeneratedToken doesn't return the old value
    cachedResponse.current = null;
    const response = await getLatestBlockHashFromServer(apiUrl, blockHashShard);
    //set the new response, the new expiry and unlock the regeneration flow for the next expiration period
    cachedResponse.current = response;
    cachingExpiresAt = Date.now() + cachingDurationMS;
    isGeneratingNewToken.current = false;
    return response;
  }
}

async function getLatestBlockHashFromServer(
  apiUrl: string,
  blockHashShard?: number
): Promise<GetLatestBlockHashResponseType> {
  const { data } = await axios.get<Array<GetLatestBlockHashResponseType>>(
    `${apiUrl}/${BLOCKS_ENDPOINT}?size=1&fields=hash,timestamp${
      blockHashShard ? '&shard=' + blockHashShard : ''
    }`
  );
  const [latestBlock] = data;
  return latestBlock;
}

async function waitForGeneratedToken(): Promise<GetLatestBlockHashResponseType> {
  return new Promise((resolve, reject) => {
    let timeoutRef: string | number | NodeJS.Timeout | undefined = undefined;
    //this interval will check the cachedResponse object for the new token and return it when available
    const retryIntervalRef = setInterval(() => {
      if (cachedResponse.current != null) {
        //if there is a new token, resolve the promise and clear out all timeouts and intervals
        resolve(cachedResponse.current);
        clearInterval(retryIntervalRef);
        clearTimeout(timeoutRef);
      }
    }, 50);
    //if this interval doesn't resolve for 5 seconds, cut out the interval and reject
    timeoutRef = setTimeout(() => {
      clearInterval(retryIntervalRef);
      reject('could not generate new token');
    }, 10000);
  });
}
