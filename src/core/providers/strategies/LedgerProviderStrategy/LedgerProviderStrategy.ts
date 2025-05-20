import { Message, Transaction } from '@multiversx/sdk-core/out';
import { IDAppProviderOptions } from '@multiversx/sdk-dapp-utils/out';
import { HWProvider } from '@multiversx/sdk-hw-provider';
import { safeWindow } from 'constants/index';

import { CANCEL_TRANSACTION_TOAST_DEFAULT_DURATION } from 'constants/transactions.constants';
import { LedgerConnectStateManager } from 'core/managers/internal/LedgerConnectStateManager/LedgerConnectStateManager';
import { ToastIconsEnum } from 'core/managers/internal/ToastManager/helpers/getToastDataStateByStatus';
import { getIsLoggedIn } from 'core/methods/account/getIsLoggedIn';
import { IProvider } from 'core/providers/types/providerFactory.types';
import { defineCustomElements } from 'lib/sdkDappUi';
import { createCustomToast } from 'store/actions/toasts/toastsActions';
import { ProviderErrorsEnum } from 'types/provider.types';
import { getLedgerProvider } from './helpers';
import { authenticateLedgerAccount } from './helpers/authenticateLedgerAccount';
import { initializeLedgerProvider } from './helpers/initializeLedgerProvider';
import { signLedgerMessage } from './helpers/signLedgerMessage';
import { LedgerConfigType } from './types/ledgerProvider.types';
import {
  BaseProviderStrategy,
  LoginOptionsTypes
} from '../BaseProviderStrategy/BaseProviderStrategy';
import { signTransactions } from '../helpers/signTransactions/signTransactions';

export class LedgerProviderStrategy extends BaseProviderStrategy {
  private provider: HWProvider | null = null;
  private config: LedgerConfigType | null = null;
  private _signTransactions:
    | ((
        transactions: Transaction[],
        options?: IDAppProviderOptions
      ) => Promise<Transaction[]>)
    | null = null;
  private _signMessage: ((message: Message) => Promise<Message>) | null = null;

  constructor(address?: string) {
    super(address);
  }

  public createProvider = async (options?: {
    anchor?: HTMLElement;
    shouldInitProvider?: boolean;
  }): Promise<IProvider> => {
    this.initialize();
    await defineCustomElements(safeWindow);
    await this.initLegderConnectManager(options?.anchor);
    const ledgerConnectManager = LedgerConnectStateManager.getInstance();

    const { ledgerProvider, ledgerConfig } = await new Promise<
      Awaited<ReturnType<typeof getLedgerProvider>>
    >((resolve, reject) =>
      initializeLedgerProvider({
        manager: ledgerConnectManager,
        resolve,
        reject,
        shouldInitProvider: options?.shouldInitProvider
      })
    );

    this.config = ledgerConfig;
    this.provider = ledgerProvider;
    this._login = this.ledgerLogin.bind(this);
    this._signTransactions =
      ledgerProvider.signTransactions.bind(ledgerProvider);
    this._signMessage = ledgerProvider.signMessage.bind(ledgerProvider);

    return this.buildProvider();
  };

  private readonly buildProvider = async () => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const provider = this.provider as unknown as IProvider;
    provider.setAccount({ address: this.address });
    provider.signTransactions = this.signTransactions;
    provider.signMessage = this.signMessage;
    provider.login = this.login.bind(this);
    provider.cancelLogin = this.cancelLogin;

    return provider;
  };

  private readonly ledgerLogin = async (
    options?: LoginOptionsTypes & { addressIndex?: number }
  ): Promise<{ address: string; signature: string }> => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }
    if (!options || typeof options.addressIndex !== 'number') {
      throw new Error('Missing addressIndex for Ledger login');
    }
    const { address, signature } = await this.provider.login({
      addressIndex: options.addressIndex
    });
    return {
      address,
      signature: signature ?? ''
    };
  };

  public override loginOperation = async (options?: LoginOptionsTypes) => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    return await authenticateLedgerAccount({
      options,
      config: this.config!,
      provider: this.provider,
      login: this.ledgerLogin.bind(this)
    });
  };

  private readonly initLegderConnectManager = async (anchor?: HTMLElement) => {
    const shouldInitiateLogin = !getIsLoggedIn();

    if (!shouldInitiateLogin) {
      return;
    }

    const ledgerConnectManager = LedgerConnectStateManager.getInstance();
    await ledgerConnectManager.init(anchor);
    const eventBus = await ledgerConnectManager.getEventBus();

    if (!eventBus) {
      throw new Error(ProviderErrorsEnum.eventBusError);
    }
  };

  private readonly signTransactions = async (transactions: Transaction[]) => {
    if (!this._signTransactions) {
      throw new Error(ProviderErrorsEnum.signTransactionsNotInitialized);
    }

    await this.rebuildProvider();

    const signedTransactions = await signTransactions({
      transactions,
      handleSign: this._signTransactions.bind(this.provider)
    });

    return signedTransactions;
  };

  private readonly signMessage = async (message: Message): Promise<Message> => {
    if (!this.provider || !this._signMessage) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    await this.rebuildProvider();

    const signedMessage = await signLedgerMessage({
      message,
      handleSignMessage: this._signMessage.bind(this.provider)
    });

    return signedMessage;
  };

  /**
   * Makes sure the device is accessible and if not, tries to initialize a new provider
   */
  private readonly rebuildProvider = async () => {
    try {
      await this.provider?.getAddress(); // can communicate with device
    } catch (_err) {
      try {
        const { ledgerProvider } = await getLedgerProvider({
          shouldInitProvider: true
        });
        this.provider = ledgerProvider;
        this._signTransactions =
          ledgerProvider.signTransactions.bind(ledgerProvider);
        this._signMessage = ledgerProvider.signMessage.bind(ledgerProvider);
      } catch (error) {
        createCustomToast({
          toastId: 'ledger-provider-rebuild-error',
          duration: CANCEL_TRANSACTION_TOAST_DEFAULT_DURATION,
          icon: ToastIconsEnum.times,
          iconClassName: 'warning',
          message: 'Unlock your device & open the MultiversX App',
          title: 'Ledger unavailable'
        });
        throw error;
      }
    }
  };
}
