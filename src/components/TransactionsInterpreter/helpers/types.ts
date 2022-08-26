import {
  ServerTransactionType,
  TokenArgumentType
} from 'types/serverTransactions.types';

export enum TransactionDirectionEnum {
  SELF = 'Self',
  INTERNAL = 'Internal',
  IN = 'In',
  OUT = 'Out'
}

export type ExtendedTransactionType = {
  tokenLabel: string;
  transactionDetails: {
    direction?: TransactionDirectionEnum;
    method: string;
    transactionTokens: TokenArgumentType[];
    isContract?: boolean;
  };
  amountInfo: {
    formattedValue?: string;
    fullFormattedValue?: string;
  };
  links: {
    senderLink?: string;
    receiverLink?: string;
    senderShardLink?: string;
    receiverShardLink?: string;
    transactionLink?: string;
  };
} & ServerTransactionType;
