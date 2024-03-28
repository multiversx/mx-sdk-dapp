import { MetamaskProvider } from '@multiversx/sdk-metamask-provider';

export const getIsMetamaskAvailable = () => {
  return MetamaskProvider.isMetamaskInstalled();
};
