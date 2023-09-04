import { Transaction } from '@multiversx/sdk-core';
import { SimpleTransactionType } from 'types';
import { transformAndSignTransactions } from '../transformAndSignTransactions';

export const transformTransactionsToSign = async ({
  transactions,
  minGasLimit
}: {
  transactions: (SimpleTransactionType | Transaction)[];
  minGasLimit?: number;
}) => {
  const areComplexTransactions = transactions.every(
    (tx) => Object.getPrototypeOf(tx).toPlainObject != null
  );

  let transactionsToSign = transactions;

  if (!areComplexTransactions) {
    transactionsToSign = await transformAndSignTransactions({
      transactions: transactions as SimpleTransactionType[],
      minGasLimit
    });
  }

  return transactionsToSign;
};
