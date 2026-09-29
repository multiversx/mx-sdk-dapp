import axios from 'axios';
import { TRANSACTIONS_ENDPOINT } from 'apiCalls/endpoints';
import { transactionSchema } from 'apiCalls/utils/apiResponseSchemas';
import { validateApiListResponse } from 'apiCalls/utils/validateApiResponse';
import { apiAddressSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { ServerTransactionType } from 'types/serverTransactions.types';

export const getServerTransactionsByHashes = async (
  hashes: string[],
  options = {
    apiAddress: ''
  }
): Promise<ServerTransactionType[]> => {
  const { data } = await axios.get<ServerTransactionType[]>(
    `${options.apiAddress || apiAddressSelector(getState())}/${TRANSACTIONS_ENDPOINT}`,
    {
      params: {
        hashes: hashes.join(','),
        withScResults: true
      },
      timeout: 10000 // 10sec
    }
  );

  validateApiListResponse({
    data,
    schema: transactionSchema,
    source: TRANSACTIONS_ENDPOINT
  });

  return data;
};
