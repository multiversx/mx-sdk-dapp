import { explorerAddressSelector } from 'reduxStore/selectors';
import { getStore } from 'reduxStore/store';

export function getNetworkLink(to: string) {
  if (!to.startsWith('/')) {
    console.error('Link not prepended by / : ', to);
    to = `/${to}`;
  }

  const explorerAddress = explorerAddressSelector(getStore().getState());
  return explorerAddress ? `${explorerAddress}${to}` : to;
}
