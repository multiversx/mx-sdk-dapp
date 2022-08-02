import { explorerAddressSelector } from '../../../reduxStore/selectors';
import { store } from '../../../reduxStore/store';

export function getNetworkLink(to: string) {
  if (!to.startsWith('/')) {
    console.error('Link not prepended by / : ', to);
    to = `/${to}`;
  }

  const explorerAddress = explorerAddressSelector(store.getState());
  return explorerAddress ? `${explorerAddress}${to}` : to;
}
