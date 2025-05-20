import { DappProvider } from 'core/providers/DappProvider';
import {
  getAccountProvider,
  setAccountProvider
} from 'core/providers/helpers/accountProvider';
import { LedgerProviderStrategy } from 'core/providers/strategies/LedgerProviderStrategy/LedgerProviderStrategy';
import { ProviderTypeEnum } from 'core/providers/types/providerFactory.types';
import { createCustomToast } from 'store/actions/toasts/toastsActions';
import { accountSelector, loginInfoSelector } from 'store/selectors';
import { isSidePanelOpenSelector } from 'store/selectors/uiSelectors';
import { getState, getStore } from 'store/store';
import { ToastIconsEnum } from '../ToastManager/helpers/getToastDataStateByStatus';

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
    const { providerType } = loginInfoSelector(this.store.getState());
    const address = accountSelector(this.store.getState()).address;
    return Boolean(providerType === ProviderTypeEnum.ledger && address);
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
        createCustomToast({
          toastId: 'ledger-provider-idle-warning',
          icon: ToastIconsEnum.times,
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

  private readonly getLedgerAddress = async () => {
    if (!this.shouldCheckConnection()) {
      return;
    }

    const ledgerProvider = getAccountProvider().getProvider();
    const address = await ledgerProvider.getAddress();
    return address;
  };

  private readonly reconnectProvider = async () => {
    if (!this.shouldCheckConnection()) {
      return;
    }

    try {
      const providerInstance = new LedgerProviderStrategy();
      const createdProvider = await providerInstance.createProvider({
        shouldInitProvider: true
      });
      const dappProvider = new DappProvider(createdProvider);
      createdProvider.getType = () => ProviderTypeEnum.ledger;
      setAccountProvider(dappProvider);

      this.reset();
      clearInterval(this.recreateProviderInterval ?? 0);
      this.recreateProviderInterval = null;

      createCustomToast({
        toastId: 'ledger-provider-idle-warning',
        duration: RECONNECT_SUCCESS_DURATION,
        icon: ToastIconsEnum.check,
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
