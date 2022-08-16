import { accountNonceSelector } from 'reduxStore/selectors';
import { getStore } from 'reduxStore/store';
import { AccountType } from 'types';

export function getLatestNonce(account: AccountType | null) {
  const appState = getStore().getState();
  const currentAccountNonce = accountNonceSelector(appState);
  if (!account) {
    return currentAccountNonce;
  }
  return currentAccountNonce && !isNaN(currentAccountNonce)
    ? Math.max(currentAccountNonce, account.nonce)
    : account.nonce;
}
