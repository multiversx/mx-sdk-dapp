import BigNumber from 'bignumber.js';
import { ToastManager } from 'managers/ToastManager';
import { getAccountProvider } from 'providers/helpers/accountProvider';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { getTokenExpiration } from 'services/nativeAuth/methods/getTokenExpiration';
import {
  addressSelector,
  isLoggedInSelector
} from 'store/selectors/accountSelectors';
import { nativeAuthConfigSelector } from 'store/selectors/configSelectors';
import { tokenLoginSelector } from 'store/selectors/loginInfoSelectors';
import { getStore } from 'store/store';
import { getHumanReadableTokenExpirationTime } from './helpers/getHumanReadableTokenExpirationTime';
import { IconNamesEnum } from 'types';

export class LogoutManager {
  private static instance: LogoutManager;
  private store = getStore();
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

  private constructor() { }

  public init = async () => {
    if (!this.shouldStart()) {
      return;
    }

    const state = this.store.getState();
    const tokenLogin = tokenLoginSelector(state);

    const { isExpired: isNativeAuthTokenExpired } = getTokenExpiration(
      tokenLogin?.nativeAuthToken
    );

    if (isNativeAuthTokenExpired) {
      const provider = getAccountProvider();
      provider.logout();
    } else {
      this.addPlannedLogout();
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
    const tokenLogin = tokenLoginSelector(state);
    const isLoggedIn = isLoggedInSelector(state);
    return Boolean(tokenLogin?.nativeAuthToken && isLoggedIn);
  };

  private addPlannedLogout = () => {
    const provider = getAccountProvider();
    const address = addressSelector(this.store.getState());
    const isWebviewLogin = provider.getType() === ProviderTypeEnum.webview;

    // prevent unexpected logout if webview login
    if (!address || isWebviewLogin) {
      return;
    }

    this.addLogoutWarning();

    const tokenLogin = tokenLoginSelector(this.store.getState());

    const { secondsUntilExpires, expiresAt } = getTokenExpiration(
      tokenLogin?.nativeAuthToken
    );

    // Handle the actual logout functionality.
    const secondsUntilExpiresBN = new BigNumber(String(secondsUntilExpires));
    const plannedLogoutKey = `${address}_${expiresAt}`;
    const plannedLogoutSet = this.plannedLogoutKey === plannedLogoutKey;

    const isValidInterval =
      secondsUntilExpires && secondsUntilExpiresBN.isGreaterThan(0);

    if (!isValidInterval || plannedLogoutSet) {
      return;
    }

    this.plannedLogoutKey = plannedLogoutKey;

    clearTimeout(this.plannedLogoutTimeoutRef ?? 0);
    const millisecondsUntilLogout = secondsUntilExpiresBN.times(1000);

    this.actualLogoutTimeoutRef = setTimeout(() => {
      ToastManager.getInstance().createCustomToast({
        toastId: 'native-auth-logout',
        iconClassName: 'warning',
        title: 'Logging out',
        icon: IconNamesEnum.close,
        message: 'Your session has expired!'
      });
      this.actualLogoutTimeoutRef = null;
    }, millisecondsUntilLogout.toNumber() - 3000);

    this.plannedLogoutTimeoutRef = setTimeout(() => {
      provider.logout();
      this.plannedLogoutTimeoutRef = null;
      this.plannedLogoutKey = null;
    }, millisecondsUntilLogout.toNumber());
  };

  private readonly addLogoutWarning = () => {
    if (this.warningLogoutTimeoutRef) {
      return;
    }

    const nativeAuthConfig = nativeAuthConfigSelector(this.store.getState());
    const tokenLogin = tokenLoginSelector(this.store.getState());

    const { secondsUntilExpires } = getTokenExpiration(
      tokenLogin?.nativeAuthToken
    );

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
        iconClassName: 'warning',
        title: 'Session Expiration Warning',
        icon: IconNamesEnum.hourglass,
        message: `Your session will expire in ${readableMinutesUntilLogout}!`
      });
      this.warningLogoutTimeoutRef = null;
    }, timeoutUntilLogoutWarning);
  };
}
