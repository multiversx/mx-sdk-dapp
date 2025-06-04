import { IDAppProviderAccount, Nullable } from '@multiversx/sdk-dapp-utils/out';
import { IProviderAccount } from '@multiversx/sdk-wallet-connect-provider/out';
import { Transaction, Message } from 'lib/sdkCore';
import { IDAppProviderOptions } from 'lib/sdkDappUtils';
import { getAddress } from 'methods/account/getAddress';
import {
  IProvider,
  ProviderTypeEnum
} from 'providers/types/providerFactory.types';
import { ProviderErrorsEnum } from 'types/provider.types';

export type LoginOptionsTypes = {
  token?: string;
};

export abstract class BaseProviderStrategy implements IProvider {
  protected address?: string = '';
  protected _login:
    | ((options?: LoginOptionsTypes) => Promise<IProviderAccount | null>)
    | null = null;
  protected loginAbortController: AbortController | null = null;

  constructor(address?: string) {
    this.address = address ?? '';
  }

  // Abstract methods that subclasses **must implement**
  abstract init(): Promise<boolean>;
  abstract logout(): Promise<boolean>;
  abstract getType(): ProviderTypeEnum;

  abstract getAddress(): Promise<string | undefined>;
  abstract getAccount(): IDAppProviderAccount | null;

  // set as method notimplements
  abstract setAccount(account: IDAppProviderAccount): void;
  abstract isInitialized(): boolean;

  // Optional: You can declare this abstract if every subclass should implement connection check
  isConnected?(): boolean;

  abstract signTransaction(
    transaction: Transaction,
    options?: IDAppProviderOptions
  ): Promise<Nullable<Transaction | undefined>>;

  abstract signTransactions(
    transactions: Transaction[],
    options?: IDAppProviderOptions
  ): Promise<Nullable<Transaction[]>>;

  abstract signMessage(
    messageToSign: Message,
    options?: IDAppProviderOptions
  ): Promise<Nullable<Message>>;

  public async login(
    options?: LoginOptionsTypes
  ): Promise<{ address: string; signature: string }> {
    if (!this._login) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    if (this.loginAbortController) {
      this.loginAbortController.abort();
    }

    const controller = new AbortController();
    this.loginAbortController = controller;

    const signal = controller.signal;

    try {
      const abortPromise = new Promise<never>((_, reject) => {
        signal.addEventListener('abort', () => {
          reject(new Error('Login cancelled'));
        });
      });

      const loginResult = await Promise.race([
        this.loginOperation(options),
        abortPromise
      ]);

      this.loginAbortController = null;

      return loginResult;
    } catch (error) {
      this.loginAbortController = null;
      throw error;
    }
  }

  public cancelLogin = () => {
    if (this.loginAbortController) {
      this.loginAbortController.abort();
    }

    this.cancelAction();
    this.loginAbortController = null;
  };

  protected loginOperation = async (
    options?: LoginOptionsTypes
  ): Promise<{ address: string; signature: string }> => {
    if (!this._login) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const result = await this._login(options);

    if (!result?.address) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    return {
      ...result,
      address: result.address,
      signature: result.signature ?? ''
    };
  };

  /**
   * Initializes the provider by setting the address if it is not already set.
   */
  protected initializeAddress = () => {
    if (this.address) {
      return;
    }

    const address = getAddress();

    if (!address) {
      return;
    }

    this.address = address;
  };

  /**
   * This method should be overridden by subclasses to handle cancel login event.
   */
  protected async cancelAction(): Promise<void> {
    // default no-op
  }
}
