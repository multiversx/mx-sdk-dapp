import { Transaction } from '@multiversx/sdk-core';
import {
  MultiSignTransactionType,
  TransactionDataTokenType
} from 'types/transactions.types';
import { parseMultiEsdtTransferDataForMultipleTransactions } from './helpers/parseMultiEsdtTransferDataForMultipleTransactions';

export type MultiEsdtTransferDataReturnType = ReturnType<
  typeof getMultiEsdtTransferData
>;

export function getMultiEsdtTransferData(transactions?: Transaction[]): {
  parsedTransactionsByDataField: Record<string, TransactionDataTokenType>;
  allTransactions: MultiSignTransactionType[];
} {
  const { allTransactions, parsedTransactionsByDataField } =
    parseMultiEsdtTransferDataForMultipleTransactions({ transactions });

  return {
    parsedTransactionsByDataField,
    allTransactions
  };
}
