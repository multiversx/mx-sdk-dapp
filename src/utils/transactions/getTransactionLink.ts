import { NetworkType } from 'types';

export function getTransactionLink(
  network: NetworkType,
  transactionHash: string
) {
  return `${network.explorerAddress}/transactions/${transactionHash}`;
}

export function getAllTransactionsLink(network: NetworkType, address: string) {
  return `${network.explorerAddress}/address/${address}`;
}
