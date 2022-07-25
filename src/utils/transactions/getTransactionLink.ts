import { NetworkType } from 'types';

export function getTransactionLink(network: NetworkType, address: string) {
  return `${network.explorerAddress}/address/${address}`;
}
