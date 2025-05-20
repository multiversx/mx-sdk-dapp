import { Message, Transaction } from '@multiversx/sdk-core/out';
import {
  IProviderAccount,
  SessionEventTypes,
  SessionTypes,
  OptionalOperation
} from '@multiversx/sdk-wallet-connect-provider/out';
import { providerLabels } from 'constants/providerFactory.constants';
import { safeWindow } from 'constants/window.constants';

import { PendingTransactionsEventsEnum } from 'core/managers/internal/PendingTransactionsStateManager/types/pendingTransactions.types';
import { WalletConnectStateManager } from 'core/managers/internal/WalletConnectStateManager/WalletConnectStateManager';
import { getIsLoggedIn } from 'core/methods/account/getIsLoggedIn';
import { getAccountProvider } from 'core/providers/helpers/accountProvider';
import { getPendingTransactionsHandlers } from 'core/providers/strategies/helpers';
import {
  IProvider,
  ProviderTypeEnum
} from 'core/providers/types/providerFactory.types';
import { defineCustomElements } from 'lib/sdkDappCoreUi';
import { logoutAction } from 'store/actions';
import {
  chainIdSelector,
  nativeAuthConfigSelector,
  walletConnectConfigSelector
} from 'store/selectors';
import { getState } from 'store/store';
import { ProviderErrorsEnum } from 'types/provider.types';
import {
  WalletConnectOptionalMethodsEnum,
  WalletConnectV2Provider
} from 'utils/walletconnect/__sdkWalletconnectProvider';
import { WalletConnectV2Error, WalletConnectConfig } from './types';
import { signMessage } from '../helpers/signMessage/signMessage';

const dappMethods: string[] = [
  WalletConnectOptionalMethodsEnum.CANCEL_ACTION,
  WalletConnectOptionalMethodsEnum.SIGN_LOGIN_TOKEN
];

export class WalletConnectProviderStrategy {
  private provider: WalletConnectV2Provider | null = null;
  private config: WalletConnectConfig | undefined;
  private methods: string[] = [];
  private approval: (() => Promise<SessionTypes.Struct>) | null = null;
  private _login:
    | ((options?: {
        approval?: () => Promise<SessionTypes.Struct>;
        token?: string;
      }) => Promise<IProviderAccount | null>)
    | null = null;
  private _signTransactions:
    | ((transactions: Transaction[]) => Promise<Transaction[]>)
    | null = null;
  private _signMessage: ((message: Message) => Promise<Message>) | null = null;

  constructor(config?: WalletConnectConfig) {
    this.config = config;
  }

  public createProvider = async (options?: {
    anchor?: HTMLElement;
  }): Promise<IProvider> => {
    this.initialize();
    await defineCustomElements(safeWindow);
    await this.initWalletConnectManager(options?.anchor);

    if (!this.provider && this.config) {
      const { walletConnectProvider, dappMethods: dAppMethods } =
        await this.createWalletConnectProvider(this.config);

      // Bind in order to break reference
      this._login = walletConnectProvider.login.bind(walletConnectProvider);
      this._signTransactions = walletConnectProvider.signTransactions.bind(
        walletConnectProvider
      );
      this._signMessage = walletConnectProvider.signMessage.bind(
        walletConnectProvider
      );

      this.provider = walletConnectProvider;
      this.methods = dAppMethods;
    }

    if (this.provider) {
      const { uri = '', approval } = await this.provider.connect({
        methods: this.methods
      });

      this.approval = approval;
      const walletConnectManager = WalletConnectStateManager.getInstance();
      walletConnectManager.updateData({ wcURI: uri });
    }
    return this.buildProvider();
  };

  private buildProvider = () => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const provider = this.provider as unknown as IProvider;
    provider.login = this.login;
    provider.signTransactions = this.signTransactions;
    provider.signMessage = this.signMessage;

    return provider;
  };

  private initialize = () => {
    if (this.config?.walletConnectV2ProjectId) {
      return;
    }

    const walletConnectConfig = walletConnectConfigSelector(getState());

    if (!walletConnectConfig) {
      throw new Error(WalletConnectV2Error.invalidConfig);
    }

    this.config = walletConnectConfig;
  };

  private initWalletConnectManager = async (anchor?: HTMLElement) => {
    const shouldInitiateLogin = !getIsLoggedIn();

    if (!shouldInitiateLogin) {
      return;
    }

    const walletConnectManager = WalletConnectStateManager.getInstance();
    await walletConnectManager.init(anchor);
    const eventBus = await walletConnectManager.getEventBus();

    if (!eventBus) {
      throw new Error(ProviderErrorsEnum.eventBusError);
    }
  };

  private createWalletConnectProvider = async (config: WalletConnectConfig) => {
    const isLoggedIn = getIsLoggedIn();
    const chainId = chainIdSelector(getState());
    const nativeAuthConfig = nativeAuthConfigSelector(getState());

    if (nativeAuthConfig) {
      dappMethods.push(WalletConnectOptionalMethodsEnum.SIGN_NATIVE_AUTH_TOKEN);
    }

    if (!config?.walletConnectV2ProjectId) {
      throw new Error(WalletConnectV2Error.invalidConfig);
    }

    const handleOnLogin = () => {};

    const handleOnLogout = () => {
      logoutAction();
    };

    const handleOnEvent = (_event: SessionEventTypes['event']) => {};

    const providerHandlers = {
      onClientLogin: handleOnLogin,
      onClientLogout: handleOnLogout,
      onClientEvent: handleOnEvent
    };

    try {
      const {
        walletConnectV2ProjectId,
        walletConnectV2Options = {},
        walletConnectV2RelayAddress = ''
      } = config;
      const walletConnectProvider = new WalletConnectV2Provider(
        providerHandlers,
        chainId,
        walletConnectV2RelayAddress,
        walletConnectV2ProjectId,
        walletConnectV2Options
      );

      await walletConnectProvider.init();

      return { walletConnectProvider, dappMethods };
    } catch (err) {
      console.error(WalletConnectV2Error.connectError, err);

      if (isLoggedIn) {
        const provider = getAccountProvider();
        await provider.logout();
      }

      throw err;
    }
  };

  private login = async (options?: {
    token?: string;
  }): Promise<{
    address: string;
    signature: string;
  }> => {
    if (!this.provider) {
      throw new Error(
        'Provider is not initialized. Call createProvider first.'
      );
    }

    const isConnected = this.provider.isConnected();

    if (isConnected) {
      throw new Error(WalletConnectV2Error.connectError);
    }

    const reconnect = async (): Promise<{
      address: string;
      signature: string;
    }> => {
      if (!this.provider) {
        throw new Error(ProviderErrorsEnum.notInitialized);
      }

      if (!this._login) {
        throw new Error('Login method is not initialized.');
      }

      try {
        await this.provider.init();
        const walletConnectManager = WalletConnectStateManager.getInstance();

        const { uri = '', approval: wcApproval } = await this.provider.connect({
          methods: this.methods
        });

        walletConnectManager.updateData({ wcURI: uri });

        const providerInfo = await this._login({
          approval: wcApproval,
          token: options?.token
        });

        const { address = '', signature = '' } = providerInfo ?? {};

        walletConnectManager.handleClose({ isLoginFinished: Boolean(address) });
        return { address, signature };
      } catch {
        return await reconnect();
      }
    };

    if (!this.approval || !this._login) {
      throw new Error('Approval or login is not initialized');
    }

    try {
      const providerData = await this._login({
        approval: this.approval,
        token: options?.token
      });

      const { address = '', signature = '' } = providerData ?? {};

      const walletConnectManager = WalletConnectStateManager.getInstance();
      walletConnectManager.handleClose({ isLoginFinished: Boolean(address) });
      return { address, signature };
    } catch (error) {
      console.error(WalletConnectV2Error.userRejected, error);
      return await reconnect();
    }
  };

  private signTransactions = async (transactions: Transaction[]) => {
    if (!this.provider || !this._signTransactions) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const { eventBus, manager, onClose } = await getPendingTransactionsHandlers(
      {
        cancelAction: this.cancelAction.bind(this)
      }
    );

    eventBus.subscribe(
      PendingTransactionsEventsEnum.CLOSE_PENDING_TRANSACTIONS,
      onClose
    );

    manager.updateData({
      provider: {
        name: providerLabels.walletConnect,
        type: ProviderTypeEnum.walletConnect
      }
    });
    try {
      const signedTransactions: Transaction[] =
        await this._signTransactions(transactions);

      return signedTransactions;
    } catch (error) {
      await onClose({ shouldCancelAction: true });
      await this.sendCustomRequest({
        method: WalletConnectOptionalMethodsEnum.CANCEL_ACTION,
        action: OptionalOperation.CANCEL_ACTION
      });
      throw error;
    } finally {
      manager.closeAndReset();
      eventBus.unsubscribe(
        PendingTransactionsEventsEnum.CLOSE_PENDING_TRANSACTIONS,
        onClose
      );
    }
  };

  private signMessage = async (message: Message) => {
    if (!this.provider || !this._signMessage) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const cancelAction = () => {
      return this.sendCustomRequest({
        method: WalletConnectOptionalMethodsEnum.CANCEL_ACTION,
        action: OptionalOperation.CANCEL_ACTION
      });
    };

    const signedMessage = await signMessage({
      message,
      handleSignMessage: this._signMessage.bind(this.provider),
      cancelAction,
      providerType: providerLabels.extension
    });

    return signedMessage;
  };

  private async cancelAction() {
    await this.sendCustomRequest({
      method: WalletConnectOptionalMethodsEnum.CANCEL_ACTION,
      action: OptionalOperation.CANCEL_ACTION
    });
  }

  private async sendCustomRequest({
    action,
    method
  }: {
    action: OptionalOperation;
    method: WalletConnectOptionalMethodsEnum;
  }) {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    try {
      await this.provider.sendCustomRequest?.({
        request: {
          method,
          params: { action }
        }
      });
    } catch (error) {
      console.error(WalletConnectV2Error.actionError, error);
    }
  }
}
