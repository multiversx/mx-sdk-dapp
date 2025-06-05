import { IframeLoginTypes } from '@multiversx/sdk-web-wallet-iframe-provider/out/constants';

export type IframeProviderType = {
  type: IframeLoginTypes;
  address?: string;
  walletUrl?: string;
};
