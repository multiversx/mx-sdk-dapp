import { IDAppProviderAccount } from '@multiversx/sdk-dapp-utils/out';
import { IframeLoginTypes } from '@multiversx/sdk-web-wallet-iframe-provider/out/constants';

import { providerLabels } from 'constants/providerFactory.constants';
import { Message, Transaction } from 'lib/sdkCore';
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

type IframeProviderStrategyType =
  | typeof ProviderTypeEnum.passkey
  | typeof ProviderTypeEnum.metamask;

const IFRAME_PROVIDER_MAP: Record<
  IframeLoginTypes,
  IframeProviderStrategyType
> = {
  passkey: ProviderTypeEnum.passkey,
  metamask: ProviderTypeEnum.metamask
};

export class IframeProviderStrategy extends BaseProviderStrategy {
  private readonly provider: IframeProvider;
  private readonly type: IframeLoginTypes;
  private walletUrl: string;

  constructor({ type, address, walletUrl }: IframeProviderType) {
    super(address);
    this.type = type;
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

    this.provider.setLoginType(this.type);
    this.provider.setWalletUrl(this.walletUrl);

    return true;
  }

  logout(): Promise<boolean> {
    return this.provider.logout();
  }

  getType(): ProviderType {
    return IFRAME_PROVIDER_MAP[this.type];
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
      const signedTransactions: Transaction[] =
        await this.provider.signTransactions(transactions);

      return signedTransactions;
    } catch (error) {
      await onClose({ shouldCancelAction: true });
      throw error;
    } finally {
      manager.closeUI();
    }
  };

  signMessage = async (message: Message) => {
    if (!this.provider || !this.type) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const signedMessage = await signMessage({
      message,
      handleSignMessage: this.provider.signMessage.bind(this.provider),
      cancelAction: this.cancelAction,
      providerType: providerLabels[this.type]
    });

    return signedMessage;
  };
}
