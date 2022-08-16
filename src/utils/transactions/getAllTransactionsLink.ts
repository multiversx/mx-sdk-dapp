import { explorerAddressSelector } from 'reduxStore/selectors';
import { getStore } from 'reduxStore/store';

export function getAllTransactionsLink(
  address: string,
  explorerAddress: string = explorerAddressSelector(getStore().getState())
) {
  return `${explorerAddress}/address/${address}`;
}
