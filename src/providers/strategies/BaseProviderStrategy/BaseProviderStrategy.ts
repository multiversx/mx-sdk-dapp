import { IProviderAccount } from '@multiversx/sdk-wallet-connect-provider/out';
import { providerLabels } from 'constants/providerFactory.constants';
import { Transaction, Message } from 'lib/sdkCore';
import { IDAppProviderOptions, IDAppProviderAccount } from 'lib/sdkDappUtils';
import { PendingTransactionsEventsEnum } from 'managers/internal/PendingTransactionsStateManager';
import { getAddress } from 'methods/account/getAddress';
import { IProvider, ProviderType } from 'providers/types/providerFactory.types';
import { ProviderErrorsEnum } from 'types/provider.types';
import { getPendingTransactionsHandlers } from '../helpers';

export type LoginOptionsTypes = {
  token?: string;
};

export abstract class BaseProviderStrategy<
  T extends ProviderType = ProviderType
> implements IProvider<T>
{
  protected address?: string = '';
  protected _login:
    | ((options?: LoginOptionsTypes) => Promise<IProviderAccount | null>)
    | null = null;
  protected loginAbortController: AbortController | null = null;

  /*
   * Allow setting provider address without store login
   */
  constructor(address?: string) {
    this.address = address ?? '';
  }

  abstract init(): Promise<boolean>;
  abstract logout(): Promise<boolean>;
  abstract getType(): T;

  abstract getAddress(): Promise<string | undefined>;
  abstract setAccount(account: IDAppProviderAccount): void;
  abstract isInitialized(): boolean;

  isConnected?(): boolean;

  getAccount(): IDAppProviderAccount | null {
    throw new Error('Method not implemented.');
  }

  signTransaction(
    _transaction: Transaction,
    _options?: IDAppProviderOptions
  ): Promise<Transaction | null> {
    throw new Error('Method not implemented.');
  }

  abstract signTransactions(
    transactions: Transaction[],
    options?: IDAppProviderOptions
  ): Promise<Transaction[] | null>;

  abstract signMessage(
    messageToSign: Message,
    options?: IDAppProviderOptions
  ): Promise<Message | null>;

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

    this.cancelAction?.();
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

  cancelAction: (() => Promise<void>) | undefined = undefined;

  /**
   * This method should be overridden by subclasses to handle cancel login event.
   */
  // async cancelAction(): Promise<void> {
  //   throw new Error('Method not implemented.');
  // }

  protected async initSignState() {
    const { onClose, manager } = await getPendingTransactionsHandlers({
      cancelAction: this.cancelAction?.bind(this)
    });

    const type = this.getType();
    manager.subscribeToEventBus(PendingTransactionsEventsEnum.CLOSE, onClose);

    manager.updateData({
      name: providerLabels[type],
      type
    });

    return { onClose, manager };
  }
}
