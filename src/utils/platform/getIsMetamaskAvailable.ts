import { MetamaskProvider } from '@multiversx/sdk-metamask-provider/out/metamaskProvider';

export const getIsMetamaskAvailable = () => {
  return MetamaskProvider.isMetamaskInstalled();
};
