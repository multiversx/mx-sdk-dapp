import { IDAppProviderAccount, Nullable } from '@multiversx/sdk-dapp-utils/out';
import { IframeLoginTypes } from '@multiversx/sdk-web-wallet-iframe-provider/out/constants';

import { providerLabels } from 'constants/providerFactory.constants';
import { Message, Transaction } from 'lib/sdkCore';
import { IDAppProviderOptions } from 'lib/sdkDappUtils';
import { IframeProvider } from 'lib/sdkWebWalletIframeProvider';
import { PendingTransactionsEventsEnum } from 'managers/internal/PendingTransactionsStateManager/types/pendingTransactions.types';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { ProviderErrorsEnum } from 'types/provider.types';
import { IframeProviderType } from './types';
import { BaseProviderStrategyV2 } from '../BaseProviderStrategy/BaseProviderStrategyV2';
import { getPendingTransactionsHandlers } from '../helpers/getPendingTransactionsHandlers';
import { signMessage } from '../helpers/signMessage/signMessage';

export class IframeProviderStrategy extends BaseProviderStrategyV2 {
  private readonly provider: IframeProvider;
  private readonly type: IframeLoginTypes;

  constructor({ type, address }: IframeProviderType) {
    super(address);
    this.type = type;
    this.provider = IframeProvider.getInstance();
    this._login = this.provider.login.bind(this.provider);
  }

  init(): Promise<boolean> {
    this.initializeAddress();
    return this.initializeProvider();
  }

  private async initializeProvider() {
    await this.provider.init();

    if (this.address) {
      this.setAccount({ address: this.address });
    }

    console.log('init?', this.provider.isInitialized());
    const network = networkSelector(getState());
    this.provider.setLoginType(this.type);
    this.provider.setWalletUrl(String(network.iframeWalletAddress));

    return true;
  }

  logout(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  getType(): ProviderTypeEnum {
    throw new Error('Method not implemented.');
  }

  getAddress(): Promise<string | undefined> {
    throw new Error('Method not implemented.');
  }

  getAccount(): IDAppProviderAccount | null {
    throw new Error('Method not implemented.');
  }

  setAccount(account: IDAppProviderAccount): void {
    this.provider.setAccount(account);
  }

  isInitialized(): boolean {
    throw new Error('Method not implemented.');
  }

  signTransaction(
    _transaction: Transaction,
    _options?: IDAppProviderOptions
  ): Promise<Nullable<Transaction | undefined>> {
    throw new Error('Method not implemented.');
  }

  async cancelAction(): Promise<void> {
    await this.provider.cancelAction();
  }

  signTransactions = async (transactions: Transaction[]) => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const { manager, onClose } = await getPendingTransactionsHandlers({
      cancelAction: this.cancelAction.bind(this)
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
      cancelAction: this.cancelAction.bind(this),
      providerType: providerLabels[this.type]
    });

    return signedMessage;
  };
}
