import { Transaction } from '@multiversx/sdk-core/out';
import {
  SendTransactionReturnType,
  SendTransactionsPropsType,
  SimpleTransactionType
} from 'types';
import { getWindowLocation } from 'utils/window/getWindowLocation';
import { signTransactions } from './signTransactions';
import { transformTransactionsToSign } from './utils/transformTransactionsToSign';

export async function sendTransactions({
  transactions,
  transactionsDisplayInfo,
  redirectAfterSign = true,
  callbackRoute = getWindowLocation().pathname,
  signWithoutSending = false,
  completedTransactionsDelay,
  sessionInformation,
  skipGuardian,
  minGasLimit
}: SendTransactionsPropsType): Promise<SendTransactionReturnType> {
  try {
    const transactionsPayload = Array.isArray(transactions)
      ? transactions
      : [transactions];

    const transactionsToSign = await transformTransactionsToSign({
      transactions: transactionsPayload as SimpleTransactionType[],
      minGasLimit
    });

    return signTransactions({
      transactions: transactionsToSign as Transaction[],
      minGasLimit,
      callbackRoute,
      transactionsDisplayInfo,
      customTransactionInformation: {
        redirectAfterSign,
        completedTransactionsDelay,
        sessionInformation,
        skipGuardian,
        signWithoutSending
      }
    });
  } catch (err) {
    console.error('error signing transaction', err as any);
    return { error: err as any, sessionId: null };
  }
}
