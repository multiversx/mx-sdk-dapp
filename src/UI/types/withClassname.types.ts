import {
  InterpretedTransactionType,
  OperationType
} from 'types/serverTransactions.types';

export interface WithClassnameType {
  className?: string;
}

export interface WithTransactionType {
  transaction: InterpretedTransactionType;
}

export interface WithOperationType {
  operation: OperationType;
}
