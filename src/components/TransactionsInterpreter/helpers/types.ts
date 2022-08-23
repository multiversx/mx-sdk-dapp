import {
  TokenArgumentType,
  ServerTransactionType
} from 'types/server-transactions';

export enum TransactionDirection {
  SELF = 'Self',
  INTERNAL = 'Internal',
  IN = 'In',
  OUT = 'Out'
}

export type ExtendedTransactionType = {
  tokenLabel: string;
  transactionDetails: {
    direction?: TransactionDirection;
    method: string;
    transactionTokens: TokenArgumentType[];
    isContract?: boolean;
  };
  denomination: {
    denominatedValue?: string;
    fullDenominatedValue?: string;
  };
  links: {
    senderLink?: string;
    receiverLink?: string;
    senderShardLink?: string;
    receiverShardLink?: string;
    transactionLink?: string;
  };
} & ServerTransactionType;
