import { IDAppProviderAccount } from '@multiversx/sdk-dapp-utils/out';
import { ExtensionProvider } from '@multiversx/sdk-extension-provider/out/extensionProvider';
import { providerLabels } from 'constants/providerFactory.constants';
import { Message, Transaction } from 'lib/sdkCore';

import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { ProviderErrorsEnum } from 'types/provider.types';
import { BaseProviderStrategy } from '../BaseProviderStrategy/BaseProviderStrategy';
import { signMessage } from '../helpers/signMessage/signMessage';

export class ExtensionProviderStrategy extends BaseProviderStrategy {
  private readonly provider: ExtensionProvider;

  constructor(address?: string) {
    super(address);
    this.provider = ExtensionProvider.getInstance();
    this._login = this.provider.login.bind(this.provider);
  }

  async init(): Promise<boolean> {
    this.initializeAddress();
    return this.initializeProvider();
  }

  private async initializeProvider() {
    const initialized = await this.provider.init();

    if (this.address) {
      this.setAccount({ address: this.address });
    }

    return initialized;
  }

  getAddress(): Promise<string | undefined> {
    return this.provider.getAddress();
  }

  setAccount(account: IDAppProviderAccount): void {
    return this.provider.setAccount(account);
  }

  isInitialized(): boolean {
    return this.provider.isInitialized();
  }

  logout(): Promise<boolean> {
    return this.provider.logout();
  }

  getType(): ProviderTypeEnum {
    return ProviderTypeEnum.extension;
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
        (await this.provider.signTransactions(transactions)) ?? [];

      return signedTransactions;
    } catch (error) {
      await onClose({ shouldCancelAction: false });
      throw error;
    } finally {
      manager.closeUI();
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
      providerType: providerLabels.extension
    });

    return signedMessage;
  };
}
