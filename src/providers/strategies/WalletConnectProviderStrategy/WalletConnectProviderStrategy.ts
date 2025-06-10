import { IDAppProviderAccount } from '@multiversx/sdk-dapp-utils/out';
import {
  SessionEventTypes,
  SessionTypes,
  OptionalOperation
} from '@multiversx/sdk-wallet-connect-provider/out';
import { providerLabels } from 'constants/providerFactory.constants';
import { safeWindow } from 'constants/window.constants';
import { Message, Transaction } from 'lib/sdkCore';
import { defineCustomElements } from 'lib/sdkDappUi';
import { WalletConnectStateManager } from 'managers/internal/WalletConnectStateManager/WalletConnectStateManager';
import { getIsLoggedIn } from 'methods/account/getIsLoggedIn';
import {
  ProviderTypeEnum,
  ProviderType
} from 'providers/types/providerFactory.types';
import { logoutAction } from 'store/actions';
import { chainIdSelector, nativeAuthConfigSelector } from 'store/selectors';
import { getState } from 'store/store';
import { ProviderErrorsEnum } from 'types/provider.types';
import {
  WalletConnectOptionalMethodsEnum,
  WalletConnectV2Provider
} from 'utils/walletconnect/__sdkWalletconnectProvider';
import { WalletConnectV2Error, WalletConnectConfig } from './types';
import { BaseProviderStrategy } from '../BaseProviderStrategy/BaseProviderStrategy';
import { signMessage } from '../helpers/signMessage/signMessage';

const dappMethods: string[] = [
  WalletConnectOptionalMethodsEnum.CANCEL_ACTION,
  WalletConnectOptionalMethodsEnum.SIGN_LOGIN_TOKEN
];

type WalletConnectProviderStrategyConfigType = WalletConnectConfig & {
  anchor?: HTMLElement;
};

export class WalletConnectProviderStrategy extends BaseProviderStrategy {
  private provider: WalletConnectV2Provider | null = null;
  private readonly config: WalletConnectProviderStrategyConfigType;
  private methods: string[] = [];
  private _approval: (() => Promise<SessionTypes.Struct>) | null = null;

  constructor(config: WalletConnectProviderStrategyConfigType) {
    super();
    this.config = config;
  }

  async init(): Promise<boolean> {
    try {
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

  getType(): ProviderType {
    return ProviderTypeEnum.walletConnect;
  }

  getAddress(): Promise<string | undefined> {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    return Promise.resolve(this.provider.getAddress());
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

  private async initializeProvider() {
    await defineCustomElements(safeWindow);
    await this.initWalletConnectManager();

    if (!this.config) {
      throw new Error(WalletConnectV2Error.invalidConfig);
    }

    const { walletConnectProvider, dappMethods: dAppMethods } =
      await this.createWalletConnectProvider(this.config);

    this.provider = walletConnectProvider;
    this.methods = dAppMethods;

    const { uri = '', approval } = await this.provider.connect({
      methods: this.methods
    });

    this._approval = approval;
    const walletConnectManager = WalletConnectStateManager.getInstance();
    walletConnectManager.updateData({ wcURI: uri });
  }

  private async initWalletConnectManager() {
    const shouldInitiateLogin = !getIsLoggedIn();

    if (!shouldInitiateLogin) {
      return;
    }

    const walletConnectManager = WalletConnectStateManager.getInstance();
    await walletConnectManager.init(this.config?.anchor);
  }

  private async createWalletConnectProvider(config: WalletConnectConfig) {
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
        await this.logout();
      }

      throw err;
    }
  }

  async login(options?: { token?: string }): Promise<{
    address: string;
    signature: string;
  }> {
    if (!this.provider) {
      throw new Error(
        'Provider is not initialized. Call createProvider first.'
      );
    }

    const reconnect = async (): Promise<{
      address: string;
      signature: string;
    }> => {
      if (!this.provider) {
        throw new Error(ProviderErrorsEnum.notInitialized);
      }

      try {
        await this.provider.init();
        const walletConnectManager = WalletConnectStateManager.getInstance();

        const { uri = '', approval: wcApproval } = await this.provider.connect({
          methods: this.methods
        });

        walletConnectManager.updateData({ wcURI: uri });

        const providerInfo = await this.provider.login({
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

    if (!this._approval) {
      throw new Error('Approval or login is not initialized');
    }

    try {
      const providerData = await this.provider.login({
        approval: this._approval.bind(this),
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
  }

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
      await this.sendCustomRequest({
        method: WalletConnectOptionalMethodsEnum.CANCEL_ACTION,
        action: OptionalOperation.CANCEL_ACTION
      });
      throw error;
    } finally {
      manager.closeUI();
    }
  };

  cancelAction = async () => {
    await this.sendCustomRequest({
      method: WalletConnectOptionalMethodsEnum.CANCEL_ACTION,
      action: OptionalOperation.CANCEL_ACTION
    });
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
