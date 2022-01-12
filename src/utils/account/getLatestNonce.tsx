import { AccountOnNetwork } from '@elrondnetwork/erdjs';
import { accountNonceSelector } from 'redux/selectors';
import { store } from 'redux/store';

export function getLatestNonce(account: AccountOnNetwork) {
  const appState = store.getState();
  const currentAccountNonce = accountNonceSelector(appState);
  return currentAccountNonce && !isNaN(currentAccountNonce)
    ? Math.max(currentAccountNonce, account.nonce.valueOf())
    : account.nonce.valueOf();
}

export default getLatestNonce;
