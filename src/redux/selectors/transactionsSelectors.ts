import { Transaction } from '@elrondnetwork/erdjs/out';
import newTransaction from 'models/newTransaction';
import { SignedTransactionsType } from 'types/transactions';
import { getIsTransactionPending } from 'utils/transactions';
import { RootState } from '../store';
import { createDeepEqualSelector } from './helpers';

interface TransactionsToSignReturnType {
  callbackRoute: string;
  sessionId: string;
  transactions: Transaction[];
}

export const transactionsSelectors = (state: RootState) => state.transactions;

export const signedTransactionsSelector = createDeepEqualSelector(
  transactionsSelectors,
  (state) => state.signedTransactions
);

export const tokenOptionsSelector = createDeepEqualSelector(
  transactionsSelectors,
  (state) => state.tokenOptions
);

export const pendingSignedTransactionsSelector = createDeepEqualSelector(
  signedTransactionsSelector,
  (signedTransactions) =>
    Object.entries(signedTransactions).reduce((acc, [sessionId, txBody]) => {
      if (getIsTransactionPending(txBody.status)) {
        acc[sessionId] = txBody;
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
        state?.transactionsToSign?.transactions.map((tx) =>
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
