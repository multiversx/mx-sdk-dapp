import { explorerAddressSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';

export function getAllTransactionsLink(
  address: string,
  explorerAddress: string = explorerAddressSelector(store.getState())
) {
  return `${explorerAddress}/address/${address}`;
}
