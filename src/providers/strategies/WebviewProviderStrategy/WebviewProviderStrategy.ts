import { IDAppProviderAccount, Nullable } from '@multiversx/sdk-dapp-utils/out';
import { WebviewProvider } from '@multiversx/sdk-webview-provider/out/WebviewProvider';
import { safeWindow } from 'constants/window.constants';
import { Message, Transaction } from 'lib/sdkCore';
import { IDAppProviderOptions } from 'lib/sdkDappUtils';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { ProviderErrorsEnum } from 'types/provider.types';
import { BaseProviderStrategy } from '../BaseProviderStrategy/BaseProviderStrategy';

type WebviewProviderProps = {
  address?: string;
};

export class WebviewProviderStrategy extends BaseProviderStrategy {
  private readonly provider: WebviewProvider;

  constructor(config?: WebviewProviderProps) {
    super(config?.address);
    this.provider = WebviewProvider.getInstance({
      resetStateCallback: () => {
        safeWindow.localStorage?.clear?.();
        safeWindow.sessionStorage?.clear?.();
      }
    });
    this._login = this.provider.login.bind(this.provider);
  }

  async init(): Promise<boolean> {
    this.initializeAddress();
    return this.initializeProvider();
  }

  logout(): Promise<boolean> {
    return this.provider.logout();
  }

  getType(): ProviderTypeEnum {
    return ProviderTypeEnum.webview;
  }

  getAddress(): Promise<string | undefined> {
    throw new Error('Method not implemented.');
  }

  getAccount(): IDAppProviderAccount | null {
    throw new Error('Method not implemented.');
  }

  setAccount(account: IDAppProviderAccount): void {
    return this.provider.setAccount(account);
  }

  isInitialized(): boolean {
    return this.provider.isInitialized();
  }

  signTransaction(
    _transaction: Transaction,
    _options?: IDAppProviderOptions
  ): Promise<Nullable<Transaction | undefined>> {
    throw new Error('Method not implemented.');
  }

  private async initializeProvider() {
    const isInitialized = await this.provider.init();

    if (this.address) {
      this.setAccount({ address: this.address });
    }

    return isInitialized;
  }

  async cancelAction() {
    await this.provider?.cancelAction();
  }

  signTransactions = async (transactions: Transaction[]) => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    try {
      const signedTransactions =
        await this.provider.signTransactions(transactions);
      return signedTransactions || [];
    } catch (error) {
      this.provider.cancelAction();
      throw error;
    }
  };

  signMessage = async (message: Message) => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    try {
      const signedMessage = await this.provider.signMessage(message);
      return signedMessage;
    } catch (error) {
      this.provider.cancelAction();
      throw error;
    }
  };
}
