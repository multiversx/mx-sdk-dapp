import {
  ExtensionProvider,
  HWProvider,
  IDappProvider,
  WalletConnectProvider,
  WalletProvider
} from '@elrondnetwork/erdjs';
import { NetworkType } from 'types';
import { LoginMethodsEnum } from 'types/enums';

export const DAPP_INIT_ROUTE = '/dapp/init';

export const getProviderType = (
  provider: IDappProvider | undefined
): LoginMethodsEnum => {
  switch (provider?.constructor) {
    case WalletProvider:
      return LoginMethodsEnum.wallet;
    case WalletConnectProvider:
      return LoginMethodsEnum.walletconnect;
    case HWProvider:
      return LoginMethodsEnum.ledger;
    case ExtensionProvider:
      return LoginMethodsEnum.extension;
    // TODO: ExtraProvider
    default:
      return LoginMethodsEnum.none;
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
