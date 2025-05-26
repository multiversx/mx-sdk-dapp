import { WebviewProvider } from '@multiversx/sdk-webview-provider/out/WebviewProvider';
import { safeWindow } from 'constants/window.constants';
import { Message, Transaction } from 'lib/sdkCore';
import { IProvider } from 'providers/types/providerFactory.types';
import { ProviderErrorsEnum } from 'types/provider.types';
import { BaseProviderStrategy } from '../BaseProviderStrategy/BaseProviderStrategy';

type WebviewProviderProps = {
  address?: string;
};

export class WebviewProviderStrategy extends BaseProviderStrategy {
  private provider: WebviewProvider | null = null;
  private _signTransactions:
    | ((transactions: Transaction[]) => Promise<Transaction[] | null>)
    | null = null;
  private _signMessage: ((message: Message) => Promise<Message | null>) | null =
    null;

  constructor(config?: WebviewProviderProps) {
    super(config?.address);
  }

  public createProvider = async (): Promise<IProvider> => {
    this.initialize();

    if (!this.provider) {
      this.provider = WebviewProvider.getInstance({
        resetStateCallback: () => {
          safeWindow.localStorage?.clear?.();
          safeWindow.sessionStorage?.clear?.();
        }
      });
      await this.provider.init();
    }

    // Bind in order to break reference
    this._signTransactions = this.provider.signTransactions.bind(this.provider);
    this._signMessage = this.provider.signMessage.bind(this.provider);
    this._login = this.provider.login.bind(this.provider);

    return this.buildProvider();
  };

  protected override cancelAction() {
    return this.provider?.cancelAction?.bind(this.provider)();
  }

  private buildProvider = () => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const provider = this.provider as unknown as IProvider;

    provider.setAccount({ address: this.address });
    provider.login = this.login;
    provider.signTransactions = this.signTransactions;
    provider.signMessage = this.signMessage;
    provider.cancelLogin = this.cancelLogin;

    return provider;
  };

  private signTransactions = async (transactions: Transaction[]) => {
    if (!this.provider || !this._signTransactions) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    try {
      const signedTransactions = await this._signTransactions(transactions);
      return signedTransactions || [];
    } catch (error) {
      this.provider.cancelAction();
      throw error;
    }
  };

  private signMessage = async (message: Message) => {
    if (!this.provider || !this._signMessage) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    try {
      const signedMessage = await this._signMessage(message);
      return signedMessage;
    } catch (error) {
      this.provider.cancelAction();
      throw error;
    }
  };
}
