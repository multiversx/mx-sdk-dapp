import { Message, Transaction } from '@multiversx/sdk-core/out';
import { IframeProvider } from '@multiversx/sdk-web-wallet-iframe-provider/out';
import { IframeLoginTypes } from '@multiversx/sdk-web-wallet-iframe-provider/out/constants';

import { providerLabels } from 'constants/providerFactory.constants';
import { PendingTransactionsEventsEnum } from 'core/managers/internal/PendingTransactionsStateManager/types/pendingTransactions.types';
import { getAccount } from 'core/methods/account/getAccount';
import { IProvider } from 'core/providers/types/providerFactory.types';
import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { ProviderErrorsEnum } from 'types/provider.types';
import { IframeProviderType } from './types';
import { BaseProviderStrategy } from '../BaseProviderStrategy/BaseProviderStrategy';
import { getPendingTransactionsHandlers } from '../helpers/getPendingTransactionsHandlers';
import { signMessage } from '../helpers/signMessage/signMessage';

export class IframeProviderStrategy extends BaseProviderStrategy {
  private provider: IframeProvider | null = null;
  private type: IframeLoginTypes | null = null;
  private _signTransactions:
    | ((transactions: Transaction[]) => Promise<Transaction[]>)
    | null = null;
  private _signMessage: ((message: Message) => Promise<Message>) | null = null;

  constructor({ type, address }: IframeProviderType) {
    super(address);
    this.type = type;
  }

  public createProvider = async (): Promise<IProvider> => {
    this.initialize();
    const network = networkSelector(getState());

    if (!this.type) {
      throw new Error(ProviderErrorsEnum.invalidProviderType);
    }

    if (!this.provider) {
      this.provider = IframeProvider.getInstance();
      await this.provider.init();
    }

    this.provider.setLoginType(this.type);
    this.provider.setWalletUrl(String(network.iframeWalletAddress));
    this._signTransactions = this.provider.signTransactions.bind(this.provider);
    this._signMessage = this.provider.signMessage.bind(this.provider);
    this._login = this.provider.login.bind(this.provider);

    return this.buildProvider();
  };

  protected override cancelAction() {
    return this.provider?.cancelAction?.bind(this.provider)();
  }

  private buildProvider = () => {
    const { address } = getAccount();

    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const provider = this.provider as unknown as IProvider;
    provider.setAccount({ address: this.address || address });
    provider.signTransactions = this.signTransactions;
    provider.signMessage = this.signMessage;
    provider.login = this.login;
    provider.cancelLogin = this.cancelLogin;

    return provider;
  };

  private signTransactions = async (transactions: Transaction[]) => {
    if (!this.provider || !this._signTransactions) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const { manager, onClose } = await getPendingTransactionsHandlers({
      cancelAction: this.provider.cancelAction.bind(this.provider)
    });

    manager.subscribeToEventBus(PendingTransactionsEventsEnum.CLOSE, onClose);

    if (this.type) {
      manager.updateData({
        name: providerLabels.iframe,
        type: this.type
      });
    }

    try {
      const signedTransactions: Transaction[] =
        await this._signTransactions(transactions);

      return signedTransactions;
    } catch (error) {
      await onClose({ shouldCancelAction: true });
      throw error;
    } finally {
      manager.closeUI();
    }
  };

  private signMessage = async (message: Message) => {
    if (!this.provider || !this._signMessage || !this.type) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const signedMessage = await signMessage({
      message,
      handleSignMessage: this._signMessage.bind(this.provider),
      cancelAction: this.provider.cancelAction.bind(this.provider),
      providerType: providerLabels[this.type]
    });

    return signedMessage;
  };
}
