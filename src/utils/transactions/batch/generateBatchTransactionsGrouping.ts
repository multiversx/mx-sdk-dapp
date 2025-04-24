import { Transaction } from '@multiversx/sdk-core';
import { SimpleTransactionType } from 'types';

export const generateBatchTransactionsGrouping = (
  transactions: (Transaction | SimpleTransactionType)[][]
) => {
  let indexInFlatArray = 0;
  return transactions.map((group) => {
    return group.map(() => indexInFlatArray++);
  });
};
