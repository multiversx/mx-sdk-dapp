import { safeWindow } from 'lib/sdkDappUtils';
import { CrossWindowProvider } from 'lib/sdkWebWalletCrossWindowProvider';
import { getAccountProvider, getProviderType } from 'providers';
import { logoutAction } from 'reduxStore/commonActions';
import { store } from 'reduxStore/store';
import { LoginMethodsEnum } from 'types';
import { matchPath } from '../wrappers/AuthenticatedRoutesWrapper/helpers/matchPath';
import { getAddress, getWebviewToken } from './account';
import { preventRedirects, safeRedirect } from './redirect';
import { storage } from './storage';
import { localStorageKeys } from './storage/local';
import { addOriginToLocationPath, getWindowLocation } from './window';
import { isStaleLogoutEvent } from './logout/isStaleLogoutEvent';

interface RedirectToCallbackUrlParamsType {
  callbackUrl?: string;
  onRedirect?: (callbackUrl?: string) => void;
}

interface LogoutEventData {
  address: string;
  ts: number;
  id: string;
}

// Generate a random ID for logout events to prevent race conditions
const generateLogoutEventId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};

const redirectToCallbackUrl = ({
  callbackUrl,
  onRedirect
}: RedirectToCallbackUrlParamsType) => {
  if (typeof onRedirect === 'function') {
    onRedirect(callbackUrl);
  } else if (callbackUrl) {
    safeRedirect({ url: callbackUrl });
  }
};

const broadcastLogoutAcrossTabs = (address: string) => {
  const storedData = storage.local.getItem(localStorageKeys.logoutEvent);

  if (storedData) {
    try {
      const parsedData: LogoutEventData = JSON.parse(storedData);
      const currentTime = Date.now();

      if (
        isStaleLogoutEvent({ parsedData, currentAddress: address, currentTime })
      ) {
        return;
      }
    } catch (error) {
      // If parsing fails, continue with the logout event
      console.warn('Failed to parse existing logout event:', error);
    }
  }

  const logoutEvent: LogoutEventData = {
    address,
    ts: Date.now(),
    id: generateLogoutEventId()
  };

  storage.local.setItem({
    key: localStorageKeys.logoutEvent,
    data: JSON.stringify(logoutEvent),
    expires: 0
  });
};

const CLEAR_SESSION_TIMEOUT_MS = 500;

export async function logout(
  callbackUrl?: string,
  onRedirect?: (callbackUrl?: string) => void,
  shouldAttemptReLogin = Boolean(getWebviewToken()),
  options = {
    shouldBroadcastLogoutAcrossTabs: true,
    hasConsentPopup: false
  }
) {
  const address = await getAddress();
  const provider = getAccountProvider();
  const providerType = getProviderType(provider);
  const isWalletProvider = providerType === LoginMethodsEnum.wallet;
  const isExtraProvider = providerType === LoginMethodsEnum.extra;
  const isProviderInitialised = provider?.isInitialized?.() === true;

  if (shouldAttemptReLogin && provider?.relogin != null) {
    try {
      return await provider.relogin();
    } catch (error) {
      console.error('Relogin failed, proceeding with normal logout:', error);
    }
  }

  if (address && options.shouldBroadcastLogoutAcrossTabs) {
    broadcastLogoutAcrossTabs(address);
  }

  const url = addOriginToLocationPath(callbackUrl);
  const location = getWindowLocation();
  const { pathname: callbackPathname, origin: callbackOrigin } = new URL(
    decodeURIComponent(url)
  );

  // Prevent page redirect if the logout callbackURL is equal to the current URL
  // or if is wallet provider
  // or if we are in a child tab (redirects via window.assign cause automatic tab close)
  if (
    matchPath(location.pathname, callbackPathname) ||
    (isWalletProvider && isProviderInitialised) ||
    (safeWindow?.opener && callbackOrigin === safeWindow?.origin)
  ) {
    preventRedirects();
  }

  // We are already logged out, so we can redirect to the dapp
  if (!address) {
    return redirectToCallbackUrl({
      callbackUrl: url,
      onRedirect
    });
  }

  try {
    store.dispatch(logoutAction());

    if (isWalletProvider && isProviderInitialised) {
      // Allow redux store cleanup before redirect to web wallet
      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            await provider.logout({ callbackUrl: url });
            resolve(true);
          } catch (error) {
            reject(error);
          }
        }, CLEAR_SESSION_TIMEOUT_MS);
      });
    }

    if (
      options.hasConsentPopup &&
      providerType === LoginMethodsEnum.crossWindow
    ) {
      (provider as unknown as CrossWindowProvider).setShouldShowConsentPopup(
        true
      );
    }

    if (isProviderInitialised) {
      await provider.logout({ callbackUrl: url });
    }
  } catch (err) {
    console.error('Logging out error:', err);
  } finally {
    const skipReload = isWalletProvider || isExtraProvider;

    if (!skipReload) {
      redirectToCallbackUrl({
        callbackUrl: url,
        onRedirect
      });
    }
  }
}
