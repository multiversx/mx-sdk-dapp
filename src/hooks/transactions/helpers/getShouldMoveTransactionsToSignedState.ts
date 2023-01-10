import { Transaction } from '@multiversx/erdjs';
import { transactionsToSignSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';

/**
 * If user cancels signing in SignTransactionsModal, and transactionsToSign were cleared from store make sure we access the latest store information before proceeeding
 */
export function getShouldMoveTransactionsToSignedState(
  signedTransactions: Transaction[]
) {
  const currentTransactions = transactionsToSignSelector(store.getState());

  const hasSameTransactions =
    Object.keys(signedTransactions).length ===
    currentTransactions?.transactions.length;

  const hasAllTransactionsSigned = signedTransactions && hasSameTransactions;
  return signedTransactions && hasAllTransactionsSigned;
}
