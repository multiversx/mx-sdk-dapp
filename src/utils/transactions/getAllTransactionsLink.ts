import { networkStore } from 'lib/sdkDappCore';

export function getAllTransactionsLink(
  address: string,
  explorerAddress: string = networkStore.getState().network.explorerAddress
) {
  return `${explorerAddress}/address/${address}`;
}
