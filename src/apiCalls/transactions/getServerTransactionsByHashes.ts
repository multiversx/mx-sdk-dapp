import axios from 'axios';
import { TRANSACTIONS_ENDPOINT } from 'apiCalls/endpoints';
import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { ServerTransactionType } from 'types/serverTransactions.types';

export const getServerTransactionsByHashes = async (
  hashes: string[]
): Promise<ServerTransactionType[]> => {
  const { apiAddress } = networkSelector(getState());
  const { data } = await axios.get<ServerTransactionType[]>(
    `${apiAddress}/${TRANSACTIONS_ENDPOINT}`,
    {
      params: {
        hashes: hashes.join(','),
        withScResults: true
      }
    }
  );

  return data;
};
