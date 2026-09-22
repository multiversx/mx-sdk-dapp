import BigNumber from 'bignumber.js';
import { ToastManager } from 'managers/ToastManager';
import { warnInsecureDefault } from 'methods/initApp/helpers/flagsConfig';
import { getFlagsConfig } from 'methods/initApp/helpers/getFlagsConfig';
import { getAccountProvider } from 'providers/helpers/accountProvider';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import {
  addressSelector,
  isLoggedInSelector
} from 'store/selectors/accountSelectors';
import { nativeAuthConfigSelector } from 'store/selectors/configSelectors';
import { tokenLoginSelector } from 'store/selectors/loginInfoSelectors';
import { getStore } from 'store/store';
import { IconNamesEnum } from 'types/enums.types';
import { getHumanReadableTokenExpirationTime } from './helpers/getHumanReadableTokenExpirationTime';
import { getSessionExpiration } from './helpers/getSessionExpiration';

export class LogoutManager {
  private static instance: LogoutManager;
  private get store() {
    return getStore();
  }

  private warningLogoutTimeoutRef: ReturnType<typeof setInterval> | null = null;
  private actualLogoutTimeoutRef: ReturnType<typeof setInterval> | null = null;
  private plannedLogoutTimeoutRef: ReturnType<typeof setInterval> | null = null;
  private plannedLogoutKey: string | null = null;

  public static getInstance(): LogoutManager {
    if (!LogoutManager.instance) {
      LogoutManager.instance = new LogoutManager();
    }
    return LogoutManager.instance;
  }

  private constructor() {}

  public init = async () => {
    if (!this.shouldStart()) {
      this.stop();
      return;
    }

    const state = this.store.getState();

    const { isExpired: isSessionExpired } = getSessionExpiration(state);

    if (isSessionExpired) {
      this.stop();
      const provider = getAccountProvider();
      this.logoutProvider(provider);
    } else {
      this.addPlannedLogout();
    }
  };

  private readonly logoutProvider = (provider: {
    logout: () => Promise<boolean>;
  }) => {
    const onError = (error: unknown) =>
      console.error('Failed logging out the session', error);

    try {
      provider.logout()?.catch?.(onError);
    } catch (error) {
      onError(error);
    }
  };

  public stop = () => {
    clearTimeout(this.warningLogoutTimeoutRef ?? 0);
    clearTimeout(this.plannedLogoutTimeoutRef ?? 0);
    clearTimeout(this.actualLogoutTimeoutRef ?? 0);

    this.warningLogoutTimeoutRef = null;
    this.plannedLogoutTimeoutRef = null;
    this.actualLogoutTimeoutRef = null;
    this.plannedLogoutKey = null;
  };

  private readonly shouldStart = (): boolean => {
    const state = this.store.getState();
    const isLoggedIn = isLoggedInSelector(state);

    if (!isLoggedIn) {
      return false;
    }

    const { enforceSessionExpiry } = getFlagsConfig();

    if (enforceSessionExpiry) {
      return true;
    }

    const tokenLogin = tokenLoginSelector(state);

    if (!tokenLogin?.nativeAuthToken) {
      warnInsecureDefault(
        'enforceSessionExpiry',
        'This session has no nativeAuth token, so no expiry is scheduled for it. ' +
          'The provider session stays usable until the user logs out explicitly.'
      );
      return false;
    }

    return true;
  };

  private addPlannedLogout = () => {
    const provider = getAccountProvider();
    const address = addressSelector(this.store.getState());
    const isWebviewLogin = provider.getType() === ProviderTypeEnum.webview;

    // prevent unexpected logout if webview login
    if (!address || isWebviewLogin) {
      this.stop();
      return;
    }

    const { secondsUntilExpires, expiresAt } = getSessionExpiration(
      this.store.getState()
    );

    const plannedLogoutKey = `${address}_${expiresAt}`;

    if (this.plannedLogoutKey === plannedLogoutKey) {
      return;
    }

    // Timers of a previous session must not fire in this one
    this.stop();
    this.addLogoutWarning();

    // Handle the actual logout functionality.
    const secondsUntilExpiresBN = new BigNumber(String(secondsUntilExpires));

    const isValidInterval =
      secondsUntilExpires && secondsUntilExpiresBN.isGreaterThan(0);

    if (!isValidInterval) {
      return;
    }

    this.plannedLogoutKey = plannedLogoutKey;

    const millisecondsUntilLogout = secondsUntilExpiresBN.times(1000);

    this.actualLogoutTimeoutRef = setTimeout(() => {
      ToastManager.getInstance().createCustomToast({
        toastId: 'native-auth-logout',
        iconClassName: 'mvx-toast-warning',
        title: 'Logging out',
        icon: IconNamesEnum.triangularWarning,
        message: 'Your session has expired!'
      });
      this.actualLogoutTimeoutRef = null;
    }, millisecondsUntilLogout.toNumber() - 3000);

    this.plannedLogoutTimeoutRef = setTimeout(() => {
      if (!isLoggedInSelector(this.store.getState())) {
        return;
      }

      this.logoutProvider(provider);
      this.plannedLogoutTimeoutRef = null;
      this.plannedLogoutKey = null;
    }, millisecondsUntilLogout.toNumber());
  };

  private readonly addLogoutWarning = () => {
    if (this.warningLogoutTimeoutRef) {
      return;
    }

    const nativeAuthConfig = nativeAuthConfigSelector(this.store.getState());

    const { secondsUntilExpires } = getSessionExpiration(this.store.getState());

    const secondsUntilExpiresBN = new BigNumber(String(secondsUntilExpires));
    const millisecondsUntilLogout = secondsUntilExpiresBN.times(1000);

    if (
      !secondsUntilExpires ||
      secondsUntilExpiresBN.isLessThanOrEqualTo(0) ||
      !nativeAuthConfig?.tokenExpirationToastWarningSeconds
    ) {
      return;
    }

    const logoutWarningOffsetSeconds = new BigNumber(
      nativeAuthConfig?.tokenExpirationToastWarningSeconds ?? 0
    );

    const logoutWarningOffsetMilliseconds =
      logoutWarningOffsetSeconds.times(1000);

    const millisecondsUntilLogoutWarning = secondsUntilExpiresBN
      .times(1000)
      .minus(logoutWarningOffsetMilliseconds);

    const readableMinutesUntilLogout = getHumanReadableTokenExpirationTime(
      millisecondsUntilLogout.toNumber()
    );

    const timeoutUntilLogoutWarning =
      millisecondsUntilLogoutWarning.isLessThanOrEqualTo(0)
        ? 0
        : millisecondsUntilLogoutWarning.toNumber();

    clearTimeout(this.warningLogoutTimeoutRef ?? 0);

    this.warningLogoutTimeoutRef = setTimeout(() => {
      ToastManager.getInstance().createCustomToast({
        toastId: 'native-auth-expired',
        iconClassName: 'mvx-toast-warning',
        title: 'Session Expiration Warning',
        icon: IconNamesEnum.hourglass,
        message: `Your session will expire in ${readableMinutesUntilLogout}!`
      });
      this.warningLogoutTimeoutRef = null;
    }, timeoutUntilLogoutWarning);
  };
}
