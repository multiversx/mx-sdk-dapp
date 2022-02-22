import { Transaction } from '@elrondnetwork/erdjs/out';
import { SendTransactionsPropsType, SimpleTransactionType } from 'types';
import { signTransactions } from './signTransactions';
import transformAndSignTransactions from './transformAndSignTransactions';

export interface SendTransactionReturnType {
  error?: string;
  sessionId: string | null;
}

export async function sendTransactions({
  transactions,
  transactionsDisplayInfo,
  redirectAfterSign = true,
  callbackRoute = window.location.pathname,
  signWithoutSending,
  sessionInformation,
  completedThreshold = 1,
  minGasLimit
}: SendTransactionsPropsType): Promise<SendTransactionReturnType> {
  try {
    const transactionsPayload = Array.isArray(transactions)
      ? transactions
      : [transactions];

    const areComplexTransactions = transactionsPayload.every(
      (tx) => Object.getPrototypeOf(tx).toPlainObject != null
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
      callbackRoute,
      transactionsDisplayInfo,
      customTransactionInformation: {
        redirectAfterSign,
        sessionInformation,
        signWithoutSending,
        completedThreshold
      }
    });
  } catch (err) {
    console.error('error signing transaction', err as any);
    return { error: err as any, sessionId: null };
  }
}

export default sendTransactions;
