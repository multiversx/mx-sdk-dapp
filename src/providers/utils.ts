import {
  SignableMessage,
  Transaction,
} from '@elrondnetwork/erdjs';
import { ExtensionProvider } from '@elrondnetwork/erdjs-extension-provider';
import { HWProvider } from '@elrondnetwork/erdjs-hw-provider';
import { IHWElrondApp } from '@elrondnetwork/erdjs-hw-provider/out/interface';
import { WalletConnectProvider } from '@elrondnetwork/erdjs-wallet-connect-provider';
import { WalletProvider } from '@elrondnetwork/erdjs-web-wallet-provider';
import { ledgerContractDataEnabledValue } from 'constants/index';
import { LoginMethodsEnum } from 'types/enums';
import { IDappProvider } from 'types';

export const DAPP_INIT_ROUTE = '/dapp/init';

export const getProviderType = <TProvider extends Object>(
  provider?: TProvider | null
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

export const getLedgerConfiguration = async (
  initializedHwWalletP: HWProvider
) => {
  if (!initializedHwWalletP.isInitialized()) {
    throw new Error('Unable to get version. Provider not initialized');
  }
  const hwApp: IHWElrondApp = (initializedHwWalletP as any).hwApp;
  const { contractData, version } = await hwApp.getAppConfiguration();
  const dataEnabled = contractData === ledgerContractDataEnabledValue;
  return { version, dataEnabled };
};

const notInitializedError = (caller: string) => {
  return `Unable to perform ${caller}, Provider not initialized`;
};

export class EmptyProvider implements IDappProvider {
  init(): Promise<boolean> {
    return Promise.resolve(false);
  }

  login<TOptions = { callbackUrl?: string } | undefined, TResponse = string>(options?: TOptions): Promise<TResponse> {
    throw new Error(notInitializedError(`login with options: ${options}`));
  }

  logout<TOptions = { callbackUrl?: string }, TResponse = boolean>(options?: TOptions): Promise<TResponse> {
    throw new Error(notInitializedError(`logout with options: ${options}`));
  }

  getAddress(): Promise<string> {
    throw new Error(notInitializedError('getAddress'));
  }

  isInitialized(): boolean {
    return false;
  }

  isConnected(): Promise<boolean> {
    return Promise.resolve(false);
  }

  sendTransaction?<TOptions = { callbackUrl?: string }, TResponse = Transaction>(transaction: Transaction, options?: TOptions): Promise<TResponse> {
    throw new Error(
      notInitializedError(
        `sendTransaction with transactions: ${transaction} options: ${options}`
      )
    );
  }

  signTransaction?<TOptions = { callbackUrl?: string }, TResponse = Transaction>(transaction: Transaction, options?: TOptions): Promise<TResponse> {
    throw new Error(
      notInitializedError(
        `signTransaction with transactions: ${transaction} options: ${options}`
      )
    );
  }

  signTransactions<TOptions = { callbackUrl?: string }, TResponse = []>(transactions: [], options?: TOptions): Promise<TResponse> {
    throw new Error(
      notInitializedError(
        `signTransactions with transactions: ${transactions} options: ${options}`
      )
    );
  }

  signMessage(message: SignableMessage): Promise<SignableMessage> {
    throw new Error(notInitializedError(`signTransactions with ${message}`));
  }
}

export const emptyProvider = new EmptyProvider();
