import { Transaction } from '@multiversx/sdk-core/out';
import { SimpleTransactionType } from 'types';

export const generateBatchTransactionsGrouping = (
  transactions: (Transaction | SimpleTransactionType)[][]
) => {
  let indexInFlatArray = 0;
  return transactions.map((group) => {
    return group.map((_tx) => indexInFlatArray++);
  });
};
