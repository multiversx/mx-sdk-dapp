import { networkStore } from 'lib/sdkDappCore';

export function getTransactionLink(
  transactionHash: string,
  explorerAddress: string = networkStore.getState().network.explorerAddress
) {
  return `${explorerAddress}/transactions/${transactionHash}`;
}
