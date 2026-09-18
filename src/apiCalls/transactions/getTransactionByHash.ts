import axios from 'axios';
import { TRANSACTIONS_ENDPOINT } from 'apiCalls/endpoints';
import { transactionSchema } from 'apiCalls/utils/apiResponseSchemas';
import { validateApiResponse } from 'apiCalls/utils/validateApiResponse';
import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { ServerTransactionType } from 'types/serverTransactions.types';

export const getTransactionByHash = (hash: string) => {
  const { apiAddress } = networkSelector(getState());

  return axios
    .get<ServerTransactionType>(
      `${apiAddress}/${TRANSACTIONS_ENDPOINT}/${hash}`,
      {
        timeout: 10000 // 10sec
      }
    )
    .then((response) => {
      validateApiResponse({
        data: response.data,
        schema: transactionSchema,
        source: TRANSACTIONS_ENDPOINT
      });

      return response;
    });
};
