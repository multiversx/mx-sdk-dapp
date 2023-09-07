import { getAccountProvider, getProviderType } from 'providers';
import { logoutAction } from 'reduxStore/commonActions';
import { store } from 'reduxStore/store';
import { LoginMethodsEnum } from 'types';
import { getIsLoggedIn } from 'utils/getIsLoggedIn';
import { getAddress } from './account';
import { preventRedirects, safeRedirect } from './redirect';
import { storage } from './storage';
import { localStorageKeys } from './storage/local';
import { addOriginToLocationPath } from './window';

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
  shouldAttemptRelogin = true
) {
  const provider = getAccountProvider();
  const providerType = getProviderType(provider);
  const isLoggedIn = getIsLoggedIn();
  const isWalletProvider = providerType === LoginMethodsEnum.wallet;

  if (shouldAttemptRelogin && provider?.relogin != null) {
    return await provider.relogin();
  }

  if (!isLoggedIn || !provider) {
    redirectToCallbackUrl(callbackUrl, onRedirect);
    return;
  }

  try {
    const address = await getAddress();
    broadcastLogoutAcrossTabs(address);
  } catch (err) {
    redirectToCallbackUrl(callbackUrl, onRedirect);
    console.error('error fetching logout address', err);
  }

  if (isWalletProvider) {
    preventRedirects();
  }

  store.dispatch(logoutAction());

  try {
    const url = addOriginToLocationPath(callbackUrl);

    if (providerType === LoginMethodsEnum.none) {
      // logout does not exist in empty provider
      return redirectToCallbackUrl(url, onRedirect);
    }

    if (isWalletProvider) {
      // allow Redux clearing it's state before navigation
      setTimeout(() => {
        provider.logout({ callbackUrl: url });
      });
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
  onRedirect?: (callbackUrl?: string) => void,
  isWalletProvider?: boolean
) {
  if (callbackUrl && !isWalletProvider) {
    if (typeof onRedirect === 'function') {
      onRedirect(callbackUrl);
    } else {
      safeRedirect({ url: callbackUrl, shouldForcePageReload: true });
    }
  }
}
