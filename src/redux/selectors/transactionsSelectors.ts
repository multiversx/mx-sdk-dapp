import { Transaction } from '@elrondnetwork/erdjs/out';
import newTransaction from '../../models/newTransaction';
import { RootState } from '../store';
import { createDeepEqualSelector } from './helpers';

interface TransactionsToSignReturnType {
  callbackRoute: string;
  sessionId: string;
  transactions: Transaction[];
}

export const transactionsSelectors = (state: RootState) => state.transactions;

export const signStatusSelector = createDeepEqualSelector(
  transactionsSelectors,
  (state) => state.signStatus
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
