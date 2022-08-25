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
}

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
  before
}: GetTransactionsType) => {
  const params = {
    sender,
    receiver,
    condition,
    after,
    before,
    from: (page - 1) * transactionSize,
    ...(transactionSize > 0 ? { size: transactionSize } : {}),
    withScResults
  };

  return params;
};
