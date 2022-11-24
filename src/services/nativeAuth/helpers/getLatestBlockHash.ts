import axios from 'axios';
import { BLOCKS_ENDPOINT } from 'apiCalls/endpoints';

export const getLatestBlockHash = async (
  apiUrl: string
): Promise<string | undefined> => {
  const { data } = await axios.get<{ hash: string }[]>(
    `${apiUrl}/${BLOCKS_ENDPOINT}?size=1&fields=hash`
  );
  const [latestBlock] = data;
  return latestBlock.hash;
};
