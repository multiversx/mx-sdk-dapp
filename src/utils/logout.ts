import { getAccountProvider, getProviderType } from 'providers';
import { logoutAction } from 'reduxStore/commonActions';
import { store } from 'reduxStore/store';
import { LoginMethodsEnum } from 'types';
import { getIsLoggedIn } from 'utils/getIsLoggedIn';
import { getAddress, getWebviewToken } from './account';
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
  shouldAttemptRelogin = Boolean(getWebviewToken())
) {
  const isLoggedIn = getIsLoggedIn();
  const provider = getAccountProvider();
  const providerType = getProviderType(provider);
  const isWalletProvider = providerType === LoginMethodsEnum.wallet;

  console.log({ providerType, isLoggedIn });

  if (shouldAttemptRelogin && provider?.relogin != null) {
    return await provider.relogin();
  }

  if (isWalletProvider) {
    if (!isLoggedIn) {
      return;
    }

    preventRedirects();
  }

  const url = addOriginToLocationPath(callbackUrl);
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
