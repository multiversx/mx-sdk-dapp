import { getAccountProvider, getProviderType } from 'providers';
import { logoutAction } from 'reduxStore/commonActions';
import { store } from 'reduxStore/store';
import { LoginMethodsEnum } from 'types';
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
  shouldAttemptRelogin = false
) {
  const provider = getAccountProvider();
  const providerType = getProviderType(provider);
  const isWalletProvider = providerType === LoginMethodsEnum.wallet;

  if (shouldAttemptRelogin && provider?.relogin != null) {
    return await provider.relogin();
  }

  const url = addOriginToLocationPath(callbackUrl);

  if (isWalletProvider) {
    preventRedirects();
  }

  store.dispatch(logoutAction());

  try {
    const address = await getAddress();
    broadcastLogoutAcrossTabs(address);
  } catch (err) {
    console.error('error fetching logout address', err);
    return redirectToCallbackUrl(url, onRedirect);
  }

  if (!provider || providerType === LoginMethodsEnum.none) {
    return redirectToCallbackUrl(url, onRedirect);
  }

  try {
    if (isWalletProvider) {
      // allow Redux clearing its state before navigation
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
      safeRedirect({ url: callbackUrl });
    }
  }
}
