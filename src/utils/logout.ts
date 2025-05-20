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

interface RedirectToCallbackUrlParamsType {
  callbackUrl?: string;
  onRedirect?: (callbackUrl?: string) => void;
}

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
  const { data } = storedData ? JSON.parse(storedData) : { data: address };

  if (address !== data) {
    return;
  }

  storage.local.setItem({
    key: localStorageKeys.logoutEvent,
    data: address,
    expires: 0
  });

  storage.local.removeItem(localStorageKeys.logoutEvent);
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
  const isProviderInitialised = provider?.isInitialized?.() === true;

  if (shouldAttemptReLogin && provider?.relogin != null) {
    return provider.relogin();
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
      return setTimeout(() => {
        provider.logout({ callbackUrl: url });
      }, CLEAR_SESSION_TIMEOUT_MS);
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
    if (!isWalletProvider) {
      redirectToCallbackUrl({
        callbackUrl: url,
        onRedirect
      });
    }
  }
}
