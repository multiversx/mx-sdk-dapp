import { IframeLoginTypes } from '@multiversx/sdk-web-wallet-iframe-provider/out/constants';
import { LedgerIdleStateManager } from 'managers/internal/LedgerIdleStateManager/LedgerIdleStateManager';
import { getAddress } from 'methods/account/getAddress';
import {
  CrossWindowProviderStrategy,
  ExtensionProviderStrategy,
  IframeProviderStrategy,
  LedgerProviderStrategy,
  WalletConnectProviderStrategy
} from 'providers/strategies';
import { setProviderType } from 'store/actions/loginInfo/loginInfoActions';
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
        await createdProvider.init();

        break;
      }

      case ProviderTypeEnum.crossWindow: {
        createdProvider = new CrossWindowProviderStrategy();
        await createdProvider.init();

        break;
      }

      case ProviderTypeEnum.ledger: {
        createdProvider = new LedgerProviderStrategy({ options: { anchor } });
        await createdProvider.init();

        const ledgerIdleStateManager = LedgerIdleStateManager.getInstance();
        await ledgerIdleStateManager.init();

        break;
      }

      case ProviderTypeEnum.metamask: {
        createdProvider = new IframeProviderStrategy({
          type: IframeLoginTypes.metamask
        });
        await createdProvider.init();

        break;
      }

      case ProviderTypeEnum.passkey: {
        createdProvider = new IframeProviderStrategy({
          type: IframeLoginTypes.passkey
        });
        await createdProvider.init();

        break;
      }
      case ProviderTypeEnum.walletConnect: {
        createdProvider = new WalletConnectProviderStrategy({ anchor });
        await createdProvider.init();

        break;
      }
      case ProviderTypeEnum.webview: {
        createdProvider = new WebviewProviderStrategy();
        await createdProvider.init();
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
            await createdProvider.init();
          }
        }
        break;
      }
    }

    if (!createdProvider) {
      throw new Error('Unable to create provider');
    }

    createdProvider.getType = () => type;

    console.log('=====', { createdProvider });
    const dappProvider = new DappProvider(createdProvider);

    setAccountProvider(dappProvider);
    const providerType = type as ProviderTypeEnum;
    setProviderType(providerType);

    const shouldClearInitiatedLogins = [
      ProviderTypeEnum.crossWindow,
      ProviderTypeEnum.metamask,
      ProviderTypeEnum.passkey
    ].includes(providerType);

    // Clear initiated logins and skip the login method if it's crossWindow or metamask
    clearInitiatedLogins(
      shouldClearInitiatedLogins ? { skipLoginMethod: providerType } : null
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
