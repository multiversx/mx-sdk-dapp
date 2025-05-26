import { IProviderAccount } from '@multiversx/sdk-wallet-connect-provider/out';
import { getAddress } from 'methods/account/getAddress';
import { ProviderErrorsEnum } from 'types/provider.types';

export type LoginOptionsTypes = {
  token?: string;
};

export abstract class BaseProviderStrategy {
  protected address: string = '';
  protected _login:
    | ((options?: LoginOptionsTypes) => Promise<IProviderAccount | null>)
    | null = null;
  protected loginAbortController: AbortController | null = null;

  constructor(address?: string) {
    this.address = address ?? '';
  }

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
   * This method is typically used during the creation of a provider to ensure
   * that the address is properly initialized. If the address is already set
   * or cannot be retrieved, the method will exit without making changes.
   */
  protected initialize = () => {
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
   * This method is intended to be overridden by subclasses to define the specific
   * action to be executed when a cancel login event occurs.
   *
   * Subclasses should provide their own implementation to handle the cancel login
   * behavior appropriately.
   */
  protected cancelAction() {
    return;
  }
}
