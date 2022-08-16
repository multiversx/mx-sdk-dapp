import { explorerAddressSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';

export function getTransactionLink(
  transactionHash: string,
  explorerAddress: string = explorerAddressSelector(store.getState())
) {
  return `${explorerAddress}/transactions/${transactionHash}`;
}
