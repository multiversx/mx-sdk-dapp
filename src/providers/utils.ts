import {
  ExtensionProvider,
  HWProvider,
  IDappProvider,
  SignableMessage,
  Transaction,
  WalletConnectProvider,
  WalletProvider
} from '@elrondnetwork/erdjs';
import { LoginMethodsEnum } from 'types/enums';

export const DAPP_INIT_ROUTE = '/dapp/init';

export const getProviderType = (
  provider?: IDappProvider | null
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
    case EmptyProvider:
      return LoginMethodsEnum.none;
    default:
      return LoginMethodsEnum.extra;
  }
};

export const newWalletProvider = (walletAddress: string) =>
  new WalletProvider(`${walletAddress}${DAPP_INIT_ROUTE}`);

const notInitializedError = (caller: string) => {
  return `Unable to perform ${caller}, Provider not initialized`;
};

export class EmptyProvider implements IDappProvider {
  async init() {
    return false;
  }
  login(options?: { callbackUrl?: string; token?: string }): Promise<string> {
    throw new Error(notInitializedError(`login with options: ${options}`));
  }
  async logout(options?: { callbackUrl?: string }): Promise<boolean> {
    throw new Error(notInitializedError(`logout with options: ${options}`));
  }
  async getAddress(): Promise<string> {
    throw new Error(notInitializedError('getAddress'));
  }
  isInitialized(): boolean {
    return false;
  }
  async isConnected(): Promise<boolean> {
    return false;
  }
  async sendTransaction(
    transaction: Transaction,
    options?: { callbackUrl?: string }
  ): Promise<Transaction> {
    throw new Error(
      notInitializedError(
        `sendTransaction with transactions: ${transaction} options: ${options}`
      )
    );
  }
  async signTransaction(
    transaction: Transaction,
    options?: { callbackUrl?: string }
  ): Promise<Transaction> {
    throw new Error(
      notInitializedError(
        `signTransaction with transactions: ${transaction} options: ${options}`
      )
    );
  }
  async signTransactions(
    transactions: Transaction[],
    options?: { callbackUrl?: string }
  ): Promise<Transaction[]> {
    throw new Error(
      notInitializedError(
        `signTransactions with transactions: ${transactions} options: ${options}`
      )
    );
  }
  async signMessage(message: SignableMessage): Promise<SignableMessage> {
    throw new Error(notInitializedError(`signTransactions with ${message}`));
  }
}

export const emptyProvider = new EmptyProvider();
