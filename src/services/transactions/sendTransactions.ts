import { Transaction } from '@elrondnetwork/erdjs/out';
import { signTransactions } from './signTransactions';
import transformAndSignTransactions from './transformAndSignTransactions';
import { SendTransactionsPropsType, SimpleTransactionType } from './types';

export async function sendTransactions({
  transactions,
  minGasLimit
}: SendTransactionsPropsType) {
  const transactionsPayload = Array.isArray(transactions)
    ? transactions
    : [transactions];

  const areComplexTransactions = transactionsPayload.every(
    (tx) => tx instanceof Transaction
  );
  if (!areComplexTransactions) {
    return transformAndSignTransactions({
      transactions: transactionsPayload as SimpleTransactionType[],
      minGasLimit
    });
  }
  return signTransactions({
    transactions: transactionsPayload as Transaction[],
    minGasLimit
  });
}

export default sendTransactions;
