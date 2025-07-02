import { WebviewProvider } from '@multiversx/sdk-webview-provider/out/WebviewProvider';
import { safeWindow, version } from 'constants/window.constants';
import { Message, Transaction } from 'lib/sdkCore';
import { IDAppProviderAccount } from 'lib/sdkDappUtils';
import {
  ProviderTypeEnum,
  ProviderType
} from 'providers/types/providerFactory.types';
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
        /* 
          Used in Hub to clear storage when logging out via the hub header.
        */
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

  getType(): ProviderType {
    return ProviderTypeEnum.webview;
  }

  getAddress(): Promise<string | undefined> {
    throw new Error('Method not implemented.');
  }

  setAccount(account: IDAppProviderAccount): void {
    return this.provider.setAccount(account);
  }

  isInitialized(): boolean {
    return this.provider.isInitialized();
  }

  private async initializeProvider() {
    const isInitialized = await this.provider.init(version);

    if (this.address) {
      this.setAccount({ address: this.address });
    }

    return isInitialized;
  }

  cancelAction = async () => {
    this.provider.cancelAction();
  };

  signTransactions = async (transactions: Transaction[]) => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    try {
      const signedTransactions =
        await this.provider.signTransactions(transactions);
      return signedTransactions || [];
    } catch (error) {
      this.cancelAction();
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
      this.cancelAction();
      throw error;
    }
  };
}
