import { Message, Transaction } from '@multiversx/sdk-core/out';
import { isBrowserWithPopupConfirmation } from 'constants/browser.constants';
import { providerLabels } from 'constants/providerFactory.constants';
import { PendingTransactionsEventsEnum } from 'core/managers/internal/PendingTransactionsStateManager/types/pendingTransactions.types';
import {
  IProvider,
  ProviderTypeEnum
} from 'core/providers/types/providerFactory.types';
import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';
import { crossWindowConfigSelector } from 'store/selectors';
import { networkSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { ProviderErrorsEnum } from 'types/provider.types';
import { BaseProviderStrategy } from '../BaseProviderStrategy/BaseProviderStrategy';
import { getPendingTransactionsHandlers } from '../helpers/getPendingTransactionsHandlers';
import { signMessage } from '../helpers/signMessage/signMessage';
import { guardTransactions } from '../helpers/signTransactions/helpers/guardTransactions/guardTransactions';

type CrossWindowProviderProps = {
  address?: string;
  walletAddress?: string;
};

export class CrossWindowProviderStrategy extends BaseProviderStrategy {
  private provider: CrossWindowProvider | null = null;
  private readonly walletAddress?: string;
  private _signTransactions:
    | ((transactions: Transaction[]) => Promise<Transaction[]>)
    | null = null;
  private _signMessage: ((messageToSign: Message) => Promise<Message>) | null =
    null;

  constructor(config?: CrossWindowProviderProps) {
    super(config?.address);
    this.walletAddress = config?.walletAddress;
  }

  public createProvider = async (): Promise<IProvider> => {
    this.initialize();
    const network = networkSelector(getState());

    if (!this.provider) {
      this.provider = CrossWindowProvider.getInstance();
      this.provider.init();
    }

    // Bind in order to break reference
    this._signTransactions = this.provider.signTransactions.bind(this.provider);
    this._signMessage = this.provider.signMessage.bind(this.provider);
    this._login = this.provider.login.bind(this.provider);

    this.provider.setWalletUrl(this.walletAddress ?? network.walletAddress);
    this.provider.setAddress(this.address);

    this.setPopupConsent();

    return this.buildProvider();
  };

  override cancelLogin = () => {
    if (this.loginAbortController) {
      this.loginAbortController.abort();
    }

    // is called instead of provider.cancelAction()
    CrossWindowProvider.getInstance().onDestroy();
    this.loginAbortController = null;
  };

  protected override cancelAction() {
    const cancelActionReference = this.provider?.cancelAction?.bind(
      this.provider
    );

    cancelActionReference?.();
  }

  private readonly buildProvider = () => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const provider = this.provider as unknown as IProvider;
    provider.setAccount({ address: this.address });
    provider.signTransactions = this.signTransactions;
    provider.signMessage = this.signMessage;
    provider.cancelLogin = this.cancelLogin;

    return provider;
  };

  private readonly signTransactions = async (transactions: Transaction[]) => {
    if (!this.provider || !this._signTransactions) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const { onClose, manager } = await getPendingTransactionsHandlers({
      cancelAction: this.provider.cancelAction.bind(this.provider)
    });

    manager.subscribeToEventBus(PendingTransactionsEventsEnum.CLOSE, onClose);

    manager.updateData({
      name: providerLabels.crossWindow,
      type: ProviderTypeEnum.crossWindow
    });

    this.setPopupConsent();

    try {
      const signedTransactions: Transaction[] =
        (await this._signTransactions(transactions)) ?? [];

      const optionallyGuardedTransactions =
        await guardTransactions(signedTransactions);

      return optionallyGuardedTransactions;
    } catch (error) {
      await onClose({ shouldCancelAction: true });

      throw error;
    } finally {
      manager.closeUI();
    }
  };

  private readonly signMessage = async (message: Message) => {
    if (!this.provider || !this._signMessage) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    this.setPopupConsent();

    const signedMessage = await signMessage({
      message,
      handleSignMessage: this._signMessage.bind(this.provider),
      cancelAction: this.provider.cancelAction.bind(this.provider),
      providerType: providerLabels.crossWindow
    });

    return signedMessage;
  };

  private readonly setPopupConsent = () => {
    const crossWindowDappConfig = crossWindowConfigSelector(getState());

    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    if (
      crossWindowDappConfig?.isBrowserWithPopupConfirmation ||
      isBrowserWithPopupConfirmation
    ) {
      this.provider.setShouldShowConsentPopup(true);
    }
  };
}
