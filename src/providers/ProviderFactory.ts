import { IframeLoginTypes } from '@multiversx/sdk-web-wallet-iframe-provider/out/constants';
import { LedgerIdleStateManager } from 'managers/internal/LedgerIdleStateManager/LedgerIdleStateManager';
import { getAddress } from 'methods/account/getAddress';
import {
  CrossWindowProviderStrategy,
  ExtensionProviderStrategy,
  IframeProviderStrategy,
  LedgerProviderStrategy,
  WalletConnectProviderStrategy,
  WalletConnectV2Error
} from 'providers/strategies';
import { setProviderType } from 'store/actions/loginInfo/loginInfoActions';
import { walletConnectConfigSelector } from 'store/selectors/configSelectors';
import { getState } from 'store/store';
import { DappProvider } from './DappProvider/DappProvider';
import {
  getAccountProvider,
  setAccountProvider
} from './helpers/accountProvider';
import { clearInitiatedLogins } from './helpers/clearInitiatedLogins';
import { WebviewProviderStrategy } from './strategies/WebviewProviderStrategy';
import {
  ICustomProvider,
  IProvider,
  IProviderFactory,
  ProviderType,
  ProviderTypeEnum
} from './types/providerFactory.types';

export class ProviderFactory {
  private static _customProviders: ICustomProvider[] = [];

  public static set customProviders(providers: ICustomProvider[]) {
    this._customProviders = providers;
  }

  public static get customProviders() {
    return this._customProviders;
  }

  public static async create({
    type,
    anchor
  }: IProviderFactory): Promise<DappProvider> {
    let createdProvider: IProvider | null = null;

    switch (type) {
      case ProviderTypeEnum.extension: {
        createdProvider = new ExtensionProviderStrategy();

        break;
      }

      case ProviderTypeEnum.crossWindow: {
        createdProvider = new CrossWindowProviderStrategy();

        break;
      }

      case ProviderTypeEnum.ledger: {
        createdProvider = new LedgerProviderStrategy({ anchor });

        const ledgerIdleStateManager = LedgerIdleStateManager.getInstance();
        await ledgerIdleStateManager.init();

        break;
      }

      case ProviderTypeEnum.metamask: {
        createdProvider = new IframeProviderStrategy({
          type: IframeLoginTypes.metamask
        });

        break;
      }

      case ProviderTypeEnum.passkey: {
        createdProvider = new IframeProviderStrategy({
          type: IframeLoginTypes.passkey
        });

        break;
      }
      case ProviderTypeEnum.walletConnect: {
        const walletConnectConfig = walletConnectConfigSelector(getState());

        if (!walletConnectConfig?.walletConnectV2ProjectId) {
          throw new Error(WalletConnectV2Error.invalidConfig);
        }

        createdProvider = new WalletConnectProviderStrategy({
          anchor,
          ...walletConnectConfig
        });

        break;
      }
      case ProviderTypeEnum.webview: {
        createdProvider = new WebviewProviderStrategy();
        break;
      }

      default: {
        const address = getAddress();

        for (const customProvider of this._customProviders) {
          if (customProvider.type === type) {
            createdProvider = await customProvider.constructor({
              address,
              anchor
            });
          }
        }
        break;
      }
    }

    if (!createdProvider) {
      throw new Error('Unable to create provider');
    }

    await createdProvider.init();

    const dappProvider = new DappProvider(createdProvider);
    setAccountProvider(dappProvider);

    const shouldClearInitiatedLogins = (
      [
        ProviderTypeEnum.crossWindow,
        ProviderTypeEnum.metamask,
        ProviderTypeEnum.passkey
      ] as readonly ProviderType[]
    ).includes(type);

    // Clear initiated logins and skip the login method if it's crossWindow or metamask
    clearInitiatedLogins(
      shouldClearInitiatedLogins ? { skipLoginMethod: type } : null
    );

    return dappProvider;
  }

  public static async destroy() {
    const provider = getAccountProvider();
    provider.cancelLogin();
    setAccountProvider(null);
    setProviderType(ProviderTypeEnum.none);
  }
}
