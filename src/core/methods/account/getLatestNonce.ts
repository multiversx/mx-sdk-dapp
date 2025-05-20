import { accountNonceSelector } from 'store/selectors/accountSelectors';
import { transactionsSliceSelector } from 'store/selectors/transactionsSelector';
import { getState } from 'store/store';
import { AccountType } from 'types/account.types';

export function getLatestNonce(apiAccount: AccountType | null) {
  const state = getState();
  const transactionsSessions = transactionsSliceSelector(state);
  const currentAccountNonce = accountNonceSelector(state);

  // Get the max transactions nonce
  let lastTransactionNonce = Object.keys(transactionsSessions)
    .map(Number) // Convert keys to numbers (timestamps)
    .reduce((maxNonce, timestamp) => {
      const transactions = transactionsSessions[timestamp]?.transactions || [];
      return Math.max(maxNonce, ...transactions.map((tx) => tx.nonce), 0);
    }, 0);

  if (lastTransactionNonce > 0) {
    lastTransactionNonce += 1; // Increment only if there's at least one pending transaction
  }

  if (apiAccount == null) {
    const currentStoreNonce = Math.max(
      lastTransactionNonce,
      currentAccountNonce
    );
    return currentStoreNonce;
  }

  const currentNonce = Math.max(
    lastTransactionNonce || apiAccount.nonce,
    currentAccountNonce
  );

  return currentNonce;
}
