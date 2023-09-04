import { Transaction } from '@multiversx/sdk-core/out';
import { addressSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import {
  SendBatchTransactionReturnType,
  SendBatchTransactionsPropsType,
  SimpleTransactionType
} from 'types';
import { getWindowLocation } from 'utils/window/getWindowLocation';
import { signTransactions } from './signTransactions';
import { transformTransactionsToSign } from './utils/transformTransactionsToSign';

export async function sendBatchTransactions({
  transactions,
  transactionsDisplayInfo,
  redirectAfterSign = true,
  callbackRoute = getWindowLocation().pathname,
  signWithoutSending = false,
  completedTransactionsDelay,
  sessionInformation,
  skipGuardian,
  minGasLimit
}: SendBatchTransactionsPropsType): Promise<SendBatchTransactionReturnType> {
  try {
    const address = addressSelector(store.getState());
    const transactionsPayload = transactions.flat();

    const transactionsToSign = await transformTransactionsToSign({
      transactions: transactionsPayload as SimpleTransactionType[],
      minGasLimit
    });

    let indexInFlatArray = 0;
    const grouping = transactions.map((group) => {
      return group.map((_tx) => indexInFlatArray++);
    });

    const { sessionId, error } = await signTransactions({
      transactions: transactionsToSign as Transaction[],
      minGasLimit,
      callbackRoute,
      transactionsDisplayInfo,
      customTransactionInformation: {
        grouping,
        redirectAfterSign,
        completedTransactionsDelay,
        sessionInformation,
        skipGuardian,
        signWithoutSending
      }
    });

    return {
      error,
      batchId: `${sessionId}-${address}`
    };
  } catch (err) {
    console.error('error signing transaction', err as any);
    return { error: err as any, batchId: null };
  }
}
