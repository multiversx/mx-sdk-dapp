import { DappProvider } from 'providers/DappProvider';
import {
  getAccountProvider,
  setAccountProvider
} from 'providers/helpers/accountProvider';
import { LedgerProviderStrategy } from 'providers/strategies/LedgerProviderStrategy/LedgerProviderStrategy';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { isLoggedInSelector, loginInfoSelector } from 'store/selectors';
import { isSidePanelOpenSelector } from 'store/selectors/uiSelectors';
import { getState, getStore } from 'store/store';
import { IconNamesEnum } from 'types';
import { ToastManager } from '../../ToastManager';

const LEDGER_IDLE_STATE_CHECK_INTERVAL = 30_000;
const LEDGER_IDLE_STATE_RECONNECT_INTERVAL = 5_000;
const RECONNECT_SUCCESS_DURATION = 3000;

export class LedgerIdleStateManager {
  private static instance: LedgerIdleStateManager;
  private store = getStore();
  private connectionCheckInterval: ReturnType<typeof setInterval> | null = null;
  private recreateProviderInterval: ReturnType<typeof setInterval> | null =
    null;

  public static getInstance(): LedgerIdleStateManager {
    if (!LedgerIdleStateManager.instance) {
      LedgerIdleStateManager.instance = new LedgerIdleStateManager();
    }
    return LedgerIdleStateManager.instance;
  }

  private constructor() {}

  public init = async () => {
    this.startCheckConnectionLoop();
  };

  private readonly shouldCheckConnection = (): boolean => {
    const state = this.store.getState();
    const { providerType } = loginInfoSelector(state);
    const isLoggedIn = isLoggedInSelector(state);
    return Boolean(providerType === ProviderTypeEnum.ledger && isLoggedIn);
  };

  private readonly startCheckConnectionLoop = () => {
    if (this.connectionCheckInterval) {
      return;
    }

    this.connectionCheckInterval = setInterval(async () => {
      const isSigningProcess = isSidePanelOpenSelector(getState());

      if (!this.shouldCheckConnection() || isSigningProcess) {
        return;
      }

      try {
        const ledgerProvider = getAccountProvider().getProvider();
        await ledgerProvider.getAddress();
      } catch (_error) {
        ToastManager.getInstance().createCustomToast({
          toastId: 'ledger-provider-idle-warning',
          icon: IconNamesEnum.close,
          iconClassName: 'warning',
          message: 'Unlock your device to continue signing transactions',
          title: 'Ledger disconnected'
        });
        this.reset();
        if (this.recreateProviderInterval) {
          return;
        }
        this.recreateProviderInterval = setInterval(
          this.reconnectProvider,
          LEDGER_IDLE_STATE_RECONNECT_INTERVAL
        );
      }
    }, LEDGER_IDLE_STATE_CHECK_INTERVAL);
  };

  private readonly reconnectProvider = async () => {
    if (!this.shouldCheckConnection()) {
      return;
    }

    try {
      const createdProvider = new LedgerProviderStrategy({
        shouldInitProvider: true
      });

      await createdProvider.init();

      const dappProvider = new DappProvider(createdProvider);
      createdProvider.getType = () => ProviderTypeEnum.ledger;
      setAccountProvider(dappProvider);

      this.reset();
      clearInterval(this.recreateProviderInterval ?? 0);
      this.recreateProviderInterval = null;

      ToastManager.getInstance().createCustomToast({
        toastId: 'ledger-provider-idle-warning',
        duration: RECONNECT_SUCCESS_DURATION,
        icon: IconNamesEnum.check,
        iconClassName: 'success',
        message: 'Your device is ready to sign transactions',
        title: 'Ledger reconnected'
      });
      this.startCheckConnectionLoop();
    } catch (_err) {
      console.log('Unable to reconnect to Ledger');
    }
  };

  public reset = () => {
    clearInterval(this.connectionCheckInterval ?? 0);
    this.connectionCheckInterval = null;
  };
}
