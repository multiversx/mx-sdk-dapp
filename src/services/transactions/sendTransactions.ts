import { Transaction } from '@elrondnetwork/erdjs/out';
import { SendTransactionsPropsType, SimpleTransactionType } from 'types';
import { signTransactions } from './signTransactions';
import transformAndSignTransactions from './transformAndSignTransactions';

export interface SendTransactionReturnType {
  error?: string;
  sessionId?: string;
}

export async function sendTransactions({
  transactions,
  transactionsDisplayInfo,
  minGasLimit
}: SendTransactionsPropsType): Promise<SendTransactionReturnType> {
  try {
    const transactionsPayload = Array.isArray(transactions)
      ? transactions
      : [transactions];

    const areComplexTransactions = transactionsPayload.every(
      (tx) => tx instanceof Transaction
    );
    let txToSign = transactionsPayload;
    if (!areComplexTransactions) {
      txToSign = await transformAndSignTransactions({
        transactions: transactionsPayload as SimpleTransactionType[],
        minGasLimit
      });
    }
    return signTransactions({
      transactions: txToSign as Transaction[],
      minGasLimit,
      transactionsDisplayInfo
    });
  } catch (err) {
    console.error('error signing transaction', (err as any).message);
    return { error: (err as any).message };
  }
}

export default sendTransactions;
