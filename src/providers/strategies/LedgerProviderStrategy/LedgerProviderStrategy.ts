import { IDAppProviderAccount, Nullable } from '@multiversx/sdk-dapp-utils/out';
import { HWProvider } from '@multiversx/sdk-hw-provider';
import { safeWindow } from 'constants/index';

import { CANCEL_TRANSACTION_TOAST_DEFAULT_DURATION } from 'constants/transactions.constants';
import { Message, Transaction } from 'lib/sdkCore';
import { defineCustomElements } from 'lib/sdkDappUi';
import { IDAppProviderOptions } from 'lib/sdkDappUtils';
import { LedgerConnectStateManager } from 'managers/internal/LedgerConnectStateManager/LedgerConnectStateManager';
import { ToastIconsEnum } from 'managers/internal/ToastManager/helpers/getToastDataStateByStatus';
import { getIsLoggedIn } from 'methods/account/getIsLoggedIn';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { createCustomToast } from 'store/actions/toasts/toastsActions';
import { ProviderErrorsEnum } from 'types/provider.types';
import { getLedgerProvider } from './helpers';
import { authenticateLedgerAccount } from './helpers/authenticateLedgerAccount';
import { initializeLedgerProvider } from './helpers/initializeLedgerProvider';
import { signLedgerMessage } from './helpers/signLedgerMessage';
import { LedgerConfigType } from './types/ledgerProvider.types';
import {
  BaseProviderStrategyV2,
  LoginOptionsTypes
} from '../BaseProviderStrategy/BaseProviderStrategyV2';
import { signTransactions } from '../helpers/signTransactions/signTransactions';

type LedgerOptions = {
  address?: string;
  anchor?: HTMLElement;
  shouldInitProvider?: boolean;
};

export class LedgerProviderStrategy extends BaseProviderStrategyV2 {
  private provider: HWProvider | null = null;
  private config: LedgerConfigType | null = null;
  private readonly options: LedgerOptions;

  constructor({ address, anchor, shouldInitProvider }: LedgerOptions) {
    super(address);
    this.options = { anchor, shouldInitProvider };
    this._login = this.ledgerLogin.bind(this);
  }

  async init(): Promise<boolean> {
    try {
      this.initializeAddress();
      await this.initializeProvider();
    } catch {
      return false;
    }

    return true;
  }

  logout(): Promise<boolean> {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    return this.provider.logout();
  }

  getType(): ProviderTypeEnum {
    return ProviderTypeEnum.ledger;
  }

  getAddress(): Promise<string | undefined> {
    throw new Error('Method not implemented.');
  }

  getAccount(): IDAppProviderAccount | null {
    throw new Error('Method not implemented.');
  }

  setAccount(account: IDAppProviderAccount): void {
    return this.provider?.setAccount(account);
  }

  isInitialized(): boolean {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    return this.provider.isInitialized();
  }

  signTransaction(
    _transaction: Transaction,
    _options?: IDAppProviderOptions
  ): Promise<Nullable<Transaction | undefined>> {
    throw new Error('Method not implemented.');
  }

  private async initializeProvider() {
    await defineCustomElements(safeWindow);
    await this.initLegderConnectManager(this.options.anchor);
    const ledgerConnectManager = LedgerConnectStateManager.getInstance();

    const { ledgerProvider, ledgerConfig } = await new Promise<
      Awaited<ReturnType<typeof getLedgerProvider>>
    >((resolve, reject) =>
      initializeLedgerProvider({
        manager: ledgerConnectManager,
        resolve,
        reject,
        shouldInitProvider: this.options?.shouldInitProvider
      })
    );

    this.config = ledgerConfig;
    this.provider = ledgerProvider;
  }

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
    if (!this.provider || !this.config) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    return await authenticateLedgerAccount({
      options,
      config: this.config,
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
  };

  signTransactions = async (transactions: Transaction[]) => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    await this.rebuildProvider();

    const signedTransactions = await signTransactions({
      transactions,
      handleSign: this.provider.signTransactions.bind(this.provider)
    });

    return signedTransactions;
  };

  signMessage = async (message: Message): Promise<Message> => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    await this.rebuildProvider();

    const signedMessage = await signLedgerMessage({
      message,
      handleSignMessage: this.provider.signMessage.bind(this.provider)
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
