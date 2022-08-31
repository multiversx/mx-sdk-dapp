import {
  ServerTransactionType,
  TokenArgumentType
} from 'types/serverTransactions.types';
import { FormatAmountPropsType } from 'UI/FormatAmount/formatAmount.types';

export type InterpreterAmountFormatConfigType = Omit<
  FormatAmountPropsType,
  'value'
>;

interface BaseInterpretServerTransactionsType {
  address: string;
  amountFormatConfig: InterpreterAmountFormatConfigType;
  explorerAddress: string;
}

export interface InterpretServerTransactionsType
  extends BaseInterpretServerTransactionsType {
  transactions: ServerTransactionType[];
}

export interface InterpretServerTransactionType
  extends BaseInterpretServerTransactionsType {
  transaction: ServerTransactionType;
}

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
