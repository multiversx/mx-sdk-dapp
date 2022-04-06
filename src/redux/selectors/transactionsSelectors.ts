import { Transaction } from '@elrondnetwork/erdjs';
import newTransaction from 'models/newTransaction';
import {
  CustomTransactionInformation,
  RawTransactionType,
  SignedTransactionsType
} from 'types/transactions';
import {
  getIsTransactionCompleted,
  getIsTransactionFailed,
  getIsTransactionPending,
  getIsTransactionSuccessful,
  getIsTransactionTimedOut
} from 'utils/transactions';
import { RootState } from '../store';
import { createDeepEqualSelector } from './helpers';

export interface TransactionsToSignReturnType {
  callbackRoute?: string;
  sessionId: string;
  transactions: Transaction[];
  customTransactionInformation: CustomTransactionInformation;
}

export const transactionsSelectors = (state: RootState) => state.transactions;

export const signedTransactionsSelector = createDeepEqualSelector(
  transactionsSelectors,
  (state) => state.signedTransactions as SignedTransactionsType
);

export const signTransactionsErrorSelector = createDeepEqualSelector(
  transactionsSelectors,
  (state) => state.signTransactionsError
);

export const pendingSignedTransactionsSelector = createDeepEqualSelector(
  signedTransactionsSelector,
  (signedTransactions) =>
    Object.entries(signedTransactions).reduce((acc, [sessionId, txBody]) => {
      if (getIsTransactionPending(txBody.status)) {
        (acc as any)[sessionId] = txBody;
      }
      return acc;
    }, {})
);

export const successfulTransactionsSelector = createDeepEqualSelector(
  signedTransactionsSelector,
  (signedTransactions) =>
    Object.entries(signedTransactions).reduce((acc, [sessionId, txBody]) => {
      if (getIsTransactionSuccessful(txBody.status)) {
        (acc as any)[sessionId] = txBody;
      }
      return acc;
    }, {})
);

export const completedTransactionsSelector = createDeepEqualSelector(
  signedTransactionsSelector,
  (signedTransactions) =>
    Object.entries(signedTransactions).reduce((acc, [sessionId, txBody]) => {
      if (getIsTransactionCompleted(txBody.status)) {
        (acc as any)[sessionId] = txBody;
      }
      return acc;
    }, {})
);

export const failedTransactionsSelector = createDeepEqualSelector(
  signedTransactionsSelector,
  (signedTransactions) =>
    Object.entries(signedTransactions).reduce((acc, [sessionId, txBody]) => {
      if (getIsTransactionFailed(txBody.status)) {
        (acc as any)[sessionId] = txBody;
      }
      return acc;
    }, {})
);

export const timedOutTransactionsSelector = createDeepEqualSelector(
  signedTransactionsSelector,
  (signedTransactions) =>
    Object.entries(signedTransactions).reduce((acc, [sessionId, txBody]) => {
      if (getIsTransactionTimedOut(txBody.status)) {
        (acc as any)[sessionId] = txBody;
      }
      return acc;
    }, {})
);

export const transactionsToSignSelector = createDeepEqualSelector(
  transactionsSelectors,
  (state): TransactionsToSignReturnType | null => {
    if (state?.transactionsToSign == null) {
      return null;
    }
    return {
      ...state.transactionsToSign,
      transactions:
        state?.transactionsToSign?.transactions.map((tx: RawTransactionType) =>
          newTransaction(tx)
        ) || []
    };
  }
);

export const transactionStatusSelector = createDeepEqualSelector(
  signedTransactionsSelector,
  (_: RootState, transactionSessionId: string | null) => transactionSessionId,
  (
    signedTransactions: SignedTransactionsType,
    transactionSessionId: string | null
  ) =>
    transactionSessionId != null
      ? signedTransactions?.[transactionSessionId] || {}
      : {}
);
