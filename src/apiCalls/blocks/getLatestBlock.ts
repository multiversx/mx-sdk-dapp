import { BLOCKS_ENDPOINT } from '../endpoints';
import { getCleanApiAddress } from '../utils';
import { axiosInstance } from '../utils/axiosInstance';

export interface LatestBlockType {
  hash: string;
  nonce: number;
  round: number;
  timestamp: number;
}

export const getLatestBlock = async (): Promise<LatestBlockType | null> => {
  try {
    const apiAddress = getCleanApiAddress();
    const url = `${apiAddress}/${BLOCKS_ENDPOINT}/latest`;

    const { data } = await axiosInstance.get(url);
    return data;
  } catch (err) {
    console.error('Error fetching latest block:', err);
    return null;
  }
};
