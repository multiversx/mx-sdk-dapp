import { accountNonceSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import { AccountType } from 'types';

export function getLatestNonce(account: AccountType | null) {
  const appState = store.getState();
  const currentAccountNonce = accountNonceSelector(appState);
  if (!account) {
    return currentAccountNonce;
  }
  return currentAccountNonce && !isNaN(currentAccountNonce)
    ? Math.max(currentAccountNonce, account.nonce)
    : account.nonce;
}

export default getLatestNonce;
