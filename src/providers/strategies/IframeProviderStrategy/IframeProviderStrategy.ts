import { providerLabels } from 'constants/providerFactory.constants';
import { Message, Transaction } from 'lib/sdkCore';
import { IDAppProviderAccount } from 'lib/sdkDappUtils';
import { IframeProvider } from 'lib/sdkWebWalletIframeProvider';
import {
  ProviderTypeEnum,
  ProviderType
} from 'providers/types/providerFactory.types';
import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { ProviderErrorsEnum } from 'types/provider.types';
import { IframeProviderType } from './types';
import { BaseProviderStrategy } from '../BaseProviderStrategy/BaseProviderStrategy';
import { signMessage } from '../helpers/signMessage/signMessage';
import { signTransactions } from '../helpers/signTransactions/signTransactions';

export class IframeProviderStrategy extends BaseProviderStrategy {
  private readonly provider: IframeProvider;
  private walletUrl: string;

  constructor({ address, walletUrl }: IframeProviderType = {}) {
    super(address);
    this.walletUrl = walletUrl ?? '';
    this.provider = IframeProvider.getInstance();
    this._login = this.provider.login.bind(this.provider);
  }

  init(): Promise<boolean> {
    this.initializeAddress();
    this.initializeWalletUrl();
    return this.initializeProvider();
  }

  private initializeWalletUrl() {
    if (this.walletUrl) {
      return;
    }

    const network = networkSelector(getState());

    if (!network.iframeWalletAddress) {
      throw new Error('Invalid walletUrl');
    }

    this.walletUrl = network.iframeWalletAddress;
  }

  private async initializeProvider() {
    await this.provider.init();

    if (this.address) {
      this.setAccount({ address: this.address });
    }

    this.provider.setWalletUrl(this.walletUrl);

    return true;
  }

  logout(): Promise<boolean> {
    return this.provider.logout();
  }

  getType(): ProviderType {
    return ProviderTypeEnum.metamask;
  }

  getAddress(): Promise<string | undefined> {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    return this.provider.getAddress();
  }

  setAccount(account: IDAppProviderAccount): void {
    this.provider.setAccount(account);
  }

  isInitialized(): boolean {
    return this.provider.isInitialized();
  }

  cancelAction = async () => {
    this.provider.cancelAction();
  };

  signTransactions = async (transactions: Transaction[]) => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const { manager, onClose } = await this.initSignState();

    try {
      const signedTransactions = await signTransactions({
        transactions,
        handleSign: this.provider.signTransactions.bind(this.provider)
      });

      return signedTransactions;
    } catch (error) {
      await onClose({ shouldCancelAction: true });
      throw error;
    } finally {
      manager?.closeUI();
    }
  };

  signMessage = async (message: Message) => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const signedMessage = await signMessage({
      message,
      handleSignMessage: this.provider.signMessage.bind(this.provider),
      cancelAction: this.cancelAction,
      providerType: providerLabels[ProviderTypeEnum.metamask]
    });

    return signedMessage;
  };
}
