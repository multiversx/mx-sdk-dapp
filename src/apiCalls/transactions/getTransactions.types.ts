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
  search?: string;
}
