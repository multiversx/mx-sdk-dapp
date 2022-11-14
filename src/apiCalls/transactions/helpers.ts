import { GetTransactionsType } from './getTransactions.types';

export const getTimeout = (apiTimeout?: string | number) =>
  apiTimeout ? { timeout: parseInt(String(apiTimeout)) } : {};

export const getTransactionsParams = ({
  sender,
  receiver,
  page = 1,
  transactionSize = 15,
  condition = 'should',
  withScResults = true,
  after,
  before,
  search
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
    withScResults
  };

  return params;
};
