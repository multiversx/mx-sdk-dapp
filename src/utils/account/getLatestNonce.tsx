import { accountNonceSelector } from 'redux/selectors';
import { store } from 'redux/store';
import { AccountOnNetwork } from '@elrondnetwork/erdjs-network-providers/out';

export function getLatestNonce(account: AccountOnNetwork | null) {
  const appState = store.getState();
  const currentAccountNonce = accountNonceSelector(appState);
  if (!account) {
    return currentAccountNonce;
  }
  return currentAccountNonce && !isNaN(currentAccountNonce)
    ? Math.max(currentAccountNonce, account.nonce.valueOf())
    : account.nonce.valueOf();
}

export default getLatestNonce;
