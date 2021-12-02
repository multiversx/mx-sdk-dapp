import {
  WalletProvider,
  IDappProvider,
  HWProvider,
  WalletConnectProvider,
  ExtensionProvider
} from '@elrondnetwork/erdjs';
import { NetworkType } from '../types';

export const DAPP_INIT_ROUTE = '/dapp/init';

export type ProviderType =
  | 'wallet'
  | 'ledger'
  | 'walletconnect'
  | 'extension'
  | '';

const getProviderType = (provider: IDappProvider | undefined): ProviderType => {
  switch (provider?.constructor) {
    case WalletProvider:
      return 'wallet';
    case WalletConnectProvider:
      return 'walletconnect';
    case HWProvider:
      return 'ledger';
    case ExtensionProvider:
      return 'extension';
    default:
      return '';
  }
};

export const newWalletProvider = (network: NetworkType) =>
  new WalletProvider(`${network.walletAddress}${DAPP_INIT_ROUTE}`);

const notInitializedError = (caller: string) => () => {
  throw new Error(`Unable to perform ${caller}, Provider not initialized`);
};

export const emptyProvider: IDappProvider = {
  init: async () => false,
  login: notInitializedError('login'),
  logout: notInitializedError('logout'),
  getAddress: notInitializedError('getAddress'),
  isInitialized: () => false,
  isConnected: async () => false,
  sendTransaction: notInitializedError('sendTransaction'),
  signTransaction: notInitializedError('signTransaction'),
  signTransactions: notInitializedError('signTransactions'),
  signMessage: notInitializedError('signMessage')
};

export default getProviderType;
