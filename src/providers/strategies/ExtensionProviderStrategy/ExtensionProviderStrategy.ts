import { IDAppProviderAccount, Nullable } from '@multiversx/sdk-dapp-utils/out';
import { ExtensionProvider } from '@multiversx/sdk-extension-provider/out/extensionProvider';
import { providerLabels } from 'constants/providerFactory.constants';
import { Message, Transaction } from 'lib/sdkCore';
import { IDAppProviderOptions } from 'lib/sdkDappUtils';
import { PendingTransactionsEventsEnum } from 'managers/internal/PendingTransactionsStateManager/types/pendingTransactions.types';

import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { ProviderErrorsEnum } from 'types/provider.types';
import { BaseProviderStrategyV2 } from '../BaseProviderStrategy/BaseProviderStrategyV2';
import { getPendingTransactionsHandlers } from '../helpers/getPendingTransactionsHandlers';
import { signMessage } from '../helpers/signMessage/signMessage';

export class ExtensionProviderStrategy extends BaseProviderStrategyV2 {
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

  getAccount(): IDAppProviderAccount | null {
    throw new Error('Method not implemented.');
  }

  setAccount(account: IDAppProviderAccount): void {
    console.log({ account });
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

  logout(): Promise<boolean> {
    return this.provider.logout();
  }

  getType(): ProviderTypeEnum {
    return ProviderTypeEnum.extension;
  }

  protected async cancelAction(): Promise<void> {
    return this.provider.cancelAction();
  }

  signTransactions = async (transactions: Transaction[]) => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const { manager, onClose } = await getPendingTransactionsHandlers({
      cancelAction: this.provider.cancelAction.bind(this.provider)
    });

    manager.subscribeToEventBus(PendingTransactionsEventsEnum.CLOSE, onClose);

    manager.updateData({
      name: providerLabels.extension,
      type: ProviderTypeEnum.extension
    });

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
      cancelAction: this.provider.cancelAction.bind(this.provider),
      providerType: providerLabels.extension
    });

    return signedMessage;
  };
}
