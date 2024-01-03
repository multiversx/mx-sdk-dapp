import { DEFAULT_TIMEOUT } from 'constants/index';
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

export async function logout(
  callbackUrl?: string,
  onRedirect?: (callbackUrl?: string) => void,
  shouldAttemptReLogin = Boolean(getWebviewToken())
) {
  let address = '';
  const provider = getAccountProvider();
  const providerType = getProviderType(provider);
  const isWalletProvider = providerType === LoginMethodsEnum.wallet;

  if (shouldAttemptReLogin && provider?.relogin != null) {
    return provider.relogin();
  }

  try {
    address = await getAddress();
    broadcastLogoutAcrossTabs(address);
  } catch (err) {
    console.error('error fetching logout address', err);
  }

  const url = addOriginToLocationPath(callbackUrl);
  const location = getWindowLocation();
  const callbackPathname = new URL(url).pathname;

  // Prevent page redirect if the logout callbackURL is equal to the current URL
  // or if is wallet provider
  if (matchPath(location.pathname, callbackPathname) || isWalletProvider) {
    preventRedirects();
  }

  // We are already logged out, so we can redirect to the dapp
  if (!address && provider?.isInitialized?.() == null) {
    return redirectToCallbackUrl({
      callbackUrl: url,
      onRedirect
    });
  }

  try {
    store.dispatch(logoutAction());
    // Add delay in order to have enough time for storage cleanup (web provider)
    await provider.logout({
      callbackUrl: url,
      redirectDelayMilliseconds: DEFAULT_TIMEOUT
    });
  } catch (err) {
    console.error('error logging out', err);
  } finally {
    redirectToCallbackUrl({
      callbackUrl: url,
      onRedirect
    });
  }
}
