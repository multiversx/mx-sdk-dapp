import { NetworkType } from 'types/network.types';

export const emptyNetwork: NetworkType = {
  id: 'not-configured',
  chainId: '',
  name: 'NOT CONFIGURED',
  egldLabel: '',
  decimals: '18',
  digits: '4',
  gasPerDataByte: '1500',
  walletAddress: '',
  apiAddress: '',
  explorerAddress: '',
  apiTimeout: '4000',
  roundDuration: 60000
};
