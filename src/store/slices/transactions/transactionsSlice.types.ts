import { SessionTransactionType } from 'types/transactions.types';

export type TransactionsSliceType = {
  [sessionId: string]: SessionTransactionType;
};
