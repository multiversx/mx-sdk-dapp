import { explorerAddressSelector } from 'reduxStore/selectors';
import { getStore } from 'reduxStore/store';

export function getTransactionLink(
  transactionHash: string,
  explorerAddress: string = explorerAddressSelector(getStore().getState())
) {
  return `${explorerAddress}/transactions/${transactionHash}`;
}
