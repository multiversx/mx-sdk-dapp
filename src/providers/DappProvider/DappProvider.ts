import { Message, Transaction } from 'lib/sdkCore';
import { LogoutManager } from 'managers/LogoutManager/LogoutManager';
import { setAccountProvider } from 'providers/helpers/accountProvider';
import { setProviderType } from 'store/actions/loginInfo/loginInfoActions';
import { IProvider } from '../types/providerFactory.types';
import { login } from './helpers/login/login';
import { logout } from './helpers/logout/logout';
import { handleSignError } from './helpers/signErrors/handleSignError';
import { signMessageWithProvider } from './helpers/signMessage/signMessageWithProvider';
import {
  signTransactionsWithProvider,
  SignTransactionsOptionsType
} from './helpers/signTransactions/signTransactionsWithProvider';

export class DappProvider {
  private provider: IProvider;
  private _isLoggingOut = false;

  constructor(provider: IProvider) {
    this.provider = provider;
  }

  init(): Promise<boolean> {
    return this.provider.init();
  }

  async login(options?: { token?: string }) {
    const data = await login(this.provider, options);
    setProviderType(this.provider.getType());
    setAccountProvider(this);
    LogoutManager.getInstance().init();
    return data;
  }

  isInitialized(): boolean {
    // Directly return the result of the provider's isInitialized method programaticaly
    return this.provider.isInitialized();
  }

  async logout(
    options = {
      shouldBroadcastLogoutAcrossTabs: true
    }
  ): Promise<boolean> {
    if (this._isLoggingOut) {
      console.warn('Logout already in progress');
      return false;
    }

    this._isLoggingOut = true;

    const isLoggedOut = await logout({ provider: this.provider, options });

    this._isLoggingOut = false;

    return isLoggedOut;
  }

  getType() {
    return this.provider.getType();
  }

  /**
   * @returns The original provider instance.
   */
  getProvider() {
    return this.provider;
  }

  async signTransactions(
    transactions: Transaction[],
    options?: SignTransactionsOptionsType
  ): Promise<Transaction[]> {
    try {
      const signedTransactions = await signTransactionsWithProvider({
        provider: this.provider,
        transactions,
        options
      });
      return signedTransactions;
    } catch (error) {
      const errorMessage = handleSignError(error);
      throw new Error(errorMessage);
    }
  }

  async signMessage(
    message: Message,
    options?: {
      hasConsentPopup?: boolean;
    }
  ): Promise<Message | null> {
    try {
      const signedMessage = await signMessageWithProvider({
        provider: this.provider,
        message,
        options
      });
      return signedMessage;
    } catch (error) {
      const errorMessage = handleSignError(error, 'warning');
      throw new Error(errorMessage);
    }
  }

  cancelLogin(): void {
    this.provider.cancelLogin?.();
  }
}
