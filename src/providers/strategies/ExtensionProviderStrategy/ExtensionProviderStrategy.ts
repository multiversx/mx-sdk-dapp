import { ExtensionProvider } from '@multiversx/sdk-extension-provider/out/extensionProvider';
import { providerLabels } from 'constants/providerFactory.constants';
import { PendingTransactionsEventsEnum } from 'managers/internal/PendingTransactionsStateManager/types/pendingTransactions.types';

import {
  IProvider,
  ProviderTypeEnum
} from 'providers/types/providerFactory.types';
import { ProviderErrorsEnum } from 'types/provider.types';
import { BaseProviderStrategy } from '../BaseProviderStrategy/BaseProviderStrategy';
import { getPendingTransactionsHandlers } from '../helpers/getPendingTransactionsHandlers';
import { signMessage } from '../helpers/signMessage/signMessage';
import { Message, Transaction } from 'lib/sdkCore';

export class ExtensionProviderStrategy extends BaseProviderStrategy {
  private provider: ExtensionProvider | null = null;
  private _signTransactions:
    | ((transactions: Transaction[]) => Promise<Transaction[]>)
    | null = null;
  private _signMessage: ((messageToSign: Message) => Promise<Message>) | null =
    null;

  constructor(address?: string) {
    super(address);
  }

  public createProvider = async (): Promise<IProvider> => {
    this.initialize();

    if (!this.provider) {
      this.provider = ExtensionProvider.getInstance();
      await this.provider.init();
    }

    this._signTransactions = this.provider.signTransactions.bind(this.provider);
    this._signMessage = this.provider.signMessage.bind(this.provider);
    this._login = this.provider.login.bind(this.provider);

    return this.buildProvider();
  };

  protected override cancelAction() {
    return this.provider?.cancelAction?.bind(this.provider)();
  }

  private readonly buildProvider = () => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const provider = this.provider as unknown as IProvider;
    provider.signTransactions = this.signTransactions;
    provider.signMessage = this.signMessage;
    provider.setAccount({ address: this.address });
    provider.cancelLogin = this.cancelLogin;

    return provider;
  };

  private readonly signTransactions = async (transactions: Transaction[]) => {
    if (!this.provider || !this._signTransactions) {
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
        (await this._signTransactions(transactions)) ?? [];

      return signedTransactions;
    } catch (error) {
      await onClose({ shouldCancelAction: false }); // action was triggered by user in extension, no need to retrigger it

      throw error;
    } finally {
      manager.closeUI();
    }
  };

  private readonly signMessage = async (message: Message) => {
    if (!this.provider || !this._signMessage) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const signedMessage = await signMessage({
      message,
      handleSignMessage: this._signMessage.bind(this.provider),
      cancelAction: this.provider.cancelAction.bind(this.provider),
      providerType: providerLabels.extension
    });

    return signedMessage;
  };
}
