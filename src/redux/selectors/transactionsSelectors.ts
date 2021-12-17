import { Transaction } from '@elrondnetwork/erdjs/out';
import newTransaction from '../../models/newTransaction';
import { SignedTransactionsType } from '../slices';
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
