import { InterpretedTransactionType } from 'types/serverTransactions.types';

export interface WithClassnameType {
  className?: string;
}

export interface WithTransactionType {
  transaction: InterpretedTransactionType;
}
