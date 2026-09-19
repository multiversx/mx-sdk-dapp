import {
  SessionEventTypes,
  SessionTypes,
  OptionalOperation
} from '@multiversx/sdk-wallet-connect-provider/out';
import { providerLabels } from 'constants/providerFactory.constants';
import { fallbackWalletConnectConfigurations } from 'constants/walletConnect.constants';
import { Message, Transaction } from 'lib/sdkCore';
import { IDAppProviderAccount } from 'lib/sdkDappUtils';
import { WalletConnectStateManager } from 'managers/internal/WalletConnectStateManager/WalletConnectStateManager';
import { getIsLoggedIn } from 'methods/account/getIsLoggedIn';
import { SignTransactionsOptionsType } from 'providers/DappProvider/helpers/signTransactions/signTransactionsWithProvider';
import {
  ProviderTypeEnum,
  ProviderType
} from 'providers/types/providerFactory.types';
import { logoutAction } from 'store/actions/sharedActions/sharedActions';
import { nativeAuthConfigSelector } from 'store/selectors/configSelectors';
import { chainIdSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { ProviderErrorsEnum } from 'types/provider.types';
import {
  WalletConnectOptionalMethodsEnum,
  WalletConnectV2Provider
} from 'utils/walletconnect/__sdkWalletconnectProvider';
import { WalletConnectV2Error, WalletConnectConfig } from './types';
import {
  BaseProviderStrategy,
  LoginOptionsTypes
} from '../BaseProviderStrategy/BaseProviderStrategy';
import { signMessage } from '../helpers/signMessage/signMessage';
import { finalizeSignedTransactions } from '../helpers/signTransactions/helpers/finalizeSignedTransactions';

const MAX_LOGIN_ATTEMPTS = 3;

type LoginResultType = { address: string; signature: string };

type WalletConnectProviderStrategyConfigType = WalletConnectConfig & {
  anchor?: HTMLElement;
};

export class WalletConnectProviderStrategy extends BaseProviderStrategy {
  private provider: WalletConnectV2Provider | null = null;
  private readonly config: WalletConnectProviderStrategyConfigType;
  private methods: string[] = [];
  private _approval: (() => Promise<SessionTypes.Struct>) | null = null;
  protected cancelActionAbortController: AbortController | null = null;

  constructor(config: WalletConnectProviderStrategyConfigType) {
    super();
    this.config = config;
    this._login = (options?: LoginOptionsTypes) =>
      this.loginWithApproval({ token: options?.token });
  }

  async init(): Promise<boolean> {
    try {
      if (this.provider?.isInitialized()) {
        return true;
      }

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
    this.updatePairingData(uri);
  }

  private updatePairingData(uri: string) {
    const walletConnectDeepLink =
      this.config.walletConnectDeepLink ??
      fallbackWalletConnectConfigurations.walletConnectDeepLink;

    WalletConnectStateManager.getInstance().updateData({
      wcURI: uri,
      walletConnectDeepLink: `${walletConnectDeepLink}?wallet-connect=${encodeURIComponent(uri)}`
    });
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

    const dappMethods = Array.from(
      new Set([
        WalletConnectOptionalMethodsEnum.CANCEL_ACTION,
        WalletConnectOptionalMethodsEnum.SIGN_LOGIN_TOKEN,
        ...(nativeAuthConfig
          ? [WalletConnectOptionalMethodsEnum.SIGN_NATIVE_AUTH_TOKEN]
          : []),
        ...(config?.customRequestMethods ?? [])
      ])
    );

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

  private readonly loginWithApproval = async ({
    approval = this._approval?.bind(this),
    token
  }: {
    approval?: () => Promise<SessionTypes.Struct>;
    token?: string;
  }): Promise<LoginResultType> => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    if (!approval) {
      throw new Error('Approval or login is not initialized');
    }

    const providerData = await this.provider.login({ approval, token });
    const { address = '', signature = '' } = providerData ?? {};

    WalletConnectStateManager.getInstance().handleClose({
      isLoginFinished: Boolean(address)
    });

    return { address, signature };
  };

  private readonly createPairing = async () => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    await this.provider.init();

    const { uri = '', approval } = await this.provider.connect({
      methods: this.methods
    });

    this.updatePairingData(uri);

    return approval;
  };

  protected override loginOperation = async (
    options?: LoginOptionsTypes
  ): Promise<LoginResultType> => {
    if (!this.provider) {
      throw new Error(
        'Provider is not initialized. Call createProvider first.'
      );
    }

    if (!this._approval) {
      throw new Error('Approval or login is not initialized');
    }

    const signal = this.loginAbortController?.signal;
    let approval = this._approval.bind(this);

    for (let attempt = 1; ; attempt++) {
      let result: LoginResultType;

      try {
        result = await this.loginWithApproval({
          approval,
          token: options?.token
        });
      } catch (error) {
        if (signal?.aborted || attempt >= MAX_LOGIN_ATTEMPTS) {
          throw error;
        }

        console.error(WalletConnectV2Error.userRejected, error);
        approval = await this.createPairing();
        continue;
      }

      if (signal?.aborted) {
        await this.provider.logout().catch(() => false);
        throw new Error('Login cancelled');
      }

      return result;
    }
  };

  signTransactions = async (
    transactions: Transaction[],
    options?: SignTransactionsOptionsType
  ) => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    const { manager, onClose } = await this.initSignState();

    this.cancelActionAbortController = new AbortController();
    const signal = this.cancelActionAbortController.signal;

    try {
      const abortPromise = new Promise<never>((_, reject) => {
        signal.addEventListener('abort', () => {
          reject(new Error('cancelled by user'));
        });
      });

      const signedTransactions: Transaction[] = await Promise.race([
        this.provider.signTransactions(transactions),
        abortPromise
      ]);

      return await finalizeSignedTransactions({
        signedTransactions,
        options
      });
    } catch (error) {
      await onClose({ shouldCancelAction: true });
      throw error;
    } finally {
      manager?.closeUI();
    }
  };

  cancelAction = async () => {
    this.sendCustomRequest({
      method: WalletConnectOptionalMethodsEnum.CANCEL_ACTION,
      action: OptionalOperation.CANCEL_ACTION
    });

    this.cancelActionAbortController?.abort();
  };

  signMessage = async (message: Message) => {
    if (!this.provider) {
      throw new Error(ProviderErrorsEnum.notInitialized);
    }

    this.cancelActionAbortController = new AbortController();
    const signal = this.cancelActionAbortController.signal;

    const abortPromise = new Promise<never>((_, reject) => {
      signal.addEventListener('abort', () => {
        reject(new Error('cancelled by user'));
      });
    });

    const signedMessage = await Promise.race([
      signMessage({
        message,
        handleSignMessage: this.provider.signMessage.bind(this.provider),
        cancelAction: this.cancelAction,
        providerType: providerLabels.walletConnect
      }),
      abortPromise
    ]);

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
