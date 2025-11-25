import {
  IDAppProviderAccount,
  IDAppProviderOptions
} from '@multiversx/sdk-dapp-utils/out';
import { Message, Transaction } from 'lib/sdkCore';
import {
  IProvider,
  ProviderType,
  ProviderTypeEnum
} from 'providers/types/providerFactory.types';

import { EngineTypes } from 'utils/walletconnect/__sdkWalletconnectProvider';

const notInitializedError = (caller: string) => {
  return `Unable to perform ${caller}, Provider not initialized`;
};

export class EmptyProvider implements IProvider {
  init(): Promise<boolean> {
    return Promise.resolve(false);
  }

  login<TOptions = { callbackUrl?: string } | undefined, TResponse = string>(
    options?: TOptions
  ): Promise<TResponse> {
    throw new Error(notInitializedError(`login with options: ${options}`));
  }

  logout<TOptions = { callbackUrl?: string }, TResponse = boolean>(
    options?: TOptions
  ): Promise<TResponse> {
    throw new Error(notInitializedError(`logout with options: ${options}`));
  }

  getAccount(): IDAppProviderAccount | null {
    throw new Error(notInitializedError('unable to get account'));
  }
  setAccount(account: IDAppProviderAccount): void {
    throw new Error(
      notInitializedError(`unable to set account with: ${account}`)
    );
  }

  isInitialized(): boolean {
    return false;
  }

  isConnected(): boolean {
    return false;
  }

  sendTransaction?<
    TOptions = { callbackUrl?: string },
    TResponse = Transaction
  >(transaction: Transaction, options?: TOptions): Promise<TResponse> {
    throw new Error(
      notInitializedError(
        `sendTransaction with transactions: ${transaction} options: ${options}`
      )
    );
  }

  signTransaction<TOptions = { callbackUrl?: string }, TResponse = Transaction>(
    transaction: Transaction,
    options?: TOptions
  ): Promise<TResponse> {
    throw new Error(
      notInitializedError(
        `signTransaction with transactions: ${JSON.stringify(transaction)} options: ${options}`
      )
    );
  }

  signTransactions<T>(transactions: T[]): Promise<T[]> {
    throw new Error(
      notInitializedError(
        `signTransactions with transactions: ${JSON.stringify(transactions)}`
      )
    );
  }

  signMessage(
    message: Message,
    options?: IDAppProviderOptions
  ): Promise<Message | null> {
    throw new Error(
      notInitializedError(`signMessage with ${message} and options ${options}`)
    );
  }

  sendCustomMessage?({
    method,
    params
  }: {
    method: string;
    params: any;
  }): Promise<any> {
    throw new Error(
      notInitializedError(
        `sendCustomMessage with method: ${method} params: ${params}`
      )
    );
  }

  sendCustomRequest?(options?: {
    request: EngineTypes.RequestParams['request'];
  }): Promise<any> {
    throw new Error(
      notInitializedError(`sendSessionEvent with options: ${options}`)
    );
  }

  async getAddress(): Promise<string | undefined> {
    throw new Error(notInitializedError('getAddress'));
  }

  getType(): ProviderType {
    return ProviderTypeEnum.none;
  }
}

export const emptyProvider = new EmptyProvider();
