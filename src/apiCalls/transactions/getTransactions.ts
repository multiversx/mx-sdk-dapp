import axios from 'axios';
import { TRANSACTIONS_ENDPOINT } from 'apiCalls/endpoints';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import { ServerTransactionType } from 'types/serverTransactions.types';

export interface GetTransactionsType {
  apiAddress: string;
  apiTimeout?: string | number;
  sender?: string;
  receiver?: string;
  page?: number;
  transactionSize?: number;
  after?: number;
  condition?: 'should' | 'must';
  before?: number;
  withScResults?: boolean;
  withUsername?: boolean;
  status?: TransactionServerStatusesEnum;
  /**
   * Search in data object
   */
  search?: string;
}

export const getTransactions = ({
  apiAddress,
  apiTimeout,
  sender,
  receiver,
  page = 1,
  transactionSize = 15,
  condition = 'should',
  withScResults = true,
  after,
  before,
  search,
  status,
  withUsername
}: GetTransactionsType) => {
  const params = {
    sender,
    receiver,
    condition,
    after,
    before,
    search,
    from: (page - 1) * transactionSize,
    ...(transactionSize > 0 ? { size: transactionSize } : {}),
    withScResults,
    withUsername,
    status
  };

  const timeout = apiTimeout ? { timeout: parseInt(String(apiTimeout)) } : {};

  return axios.get<ServerTransactionType[]>(
    `${apiAddress}/${TRANSACTIONS_ENDPOINT}`,
    {
      params,
      ...timeout
    }
  );
};
