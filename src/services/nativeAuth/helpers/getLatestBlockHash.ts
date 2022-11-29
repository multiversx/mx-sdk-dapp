import axios from 'axios';
import { BLOCKS_ENDPOINT } from 'apiCalls/endpoints';

export async function getLatestBlockHash<
  T = { hash: string; timestamp: number }
>(apiUrl: string): Promise<T> {
  const { data } = await axios.get<Array<T>>(
    `${apiUrl}/${BLOCKS_ENDPOINT}?size=1&fields=hash,timestamp`
  );
  const [latestBlock] = data;
  return latestBlock;
}
