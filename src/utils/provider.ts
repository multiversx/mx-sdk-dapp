import {
  ExtensionProvider,
  HWProvider,
  IDappProvider,
  WalletConnectProvider,
  WalletProvider
} from '@elrondnetwork/erdjs';
import { loginMethodsEnum} from '../types/enums';
import {NetworkType} from "../types";

export const DAPP_INIT_ROUTE = '/dapp/init';

export const getProviderType = (
  provider: IDappProvider | undefined
): loginMethodsEnum => {
  switch (provider?.constructor) {
    case WalletProvider:
      return loginMethodsEnum.wallet;
    case WalletConnectProvider:
      return loginMethodsEnum.walletconnect;
    case HWProvider:
      return loginMethodsEnum.ledger;
    case ExtensionProvider:
      return loginMethodsEnum.extension;
    default:
      return loginMethodsEnum.none;
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
