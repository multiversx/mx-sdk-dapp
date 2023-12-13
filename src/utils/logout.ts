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
  const provider = getAccountProvider();
  const providerType = getProviderType(provider);
  const isWalletProvider = providerType === LoginMethodsEnum.wallet;

  if (shouldAttemptReLogin && provider?.relogin != null) {
    return await provider.relogin();
  }

  const url = addOriginToLocationPath(callbackUrl);
  store.dispatch(logoutAction());

  try {
    const address = await getAddress();
    broadcastLogoutAcrossTabs(address);
  } catch (err) {
    console.error('error fetching logout address', err);
  }

  const location = getWindowLocation();
  const callbackPathname = new URL(url).pathname;

  // Prevent page redirect if the logout callbackURL is equal to the current URL
  if (matchPath(location.pathname, callbackPathname)) {
    preventRedirects();
  }

  if (!provider || providerType === LoginMethodsEnum.none) {
    return redirectToCallbackUrl(url, onRedirect);
  }

  try {
    if (isWalletProvider) {
      await provider.logout({ callbackUrl: url });
    } else {
      await provider.logout({ callbackUrl: url });
      redirectToCallbackUrl(url, onRedirect);
    }
  } catch (err) {
    console.error('error logging out', err);
  }
}

function redirectToCallbackUrl(
  callbackUrl?: string,
  onRedirect?: (callbackUrl?: string) => void
) {
  if (callbackUrl) {
    if (typeof onRedirect === 'function') {
      onRedirect(callbackUrl);
    } else {
      safeRedirect({ url: callbackUrl });
    }
  }
}
