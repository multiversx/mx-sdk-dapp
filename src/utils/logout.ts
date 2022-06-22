import { getAccountProvider, getProviderType } from 'providers';
import { logoutAction } from 'reduxStore/commonActions';
import { store } from 'reduxStore/store';
import { LoginMethodsEnum } from 'types';
import { getIsLoggedIn } from 'utils/getIsLoggedIn';
import { getAddress } from './account';
import { preventRedirects, safeRedirect } from './redirect';
import storage from './storage';
import { localStorageKeys } from './storage/local';

const broadcastLogoutAcrossTabs = (address: string) => {
  storage.local.setItem({
    key: localStorageKeys.logoutEvent,
    data: address,
    expires: 0
  });
  storage.local.removeItem(localStorageKeys.logoutEvent);
};

export async function logout(
  callbackUrl?: string,
  onRedirect?: (callbackUrl?: string) => void
) {
  const provider = getAccountProvider();
  const providerType = getProviderType(provider);
  const isLoggedIn = getIsLoggedIn();
  const isWalletProvider = providerType === LoginMethodsEnum.wallet;

  if (!isLoggedIn || !provider) {
    return;
  }

  try {
    const address = await getAddress();
    broadcastLogoutAcrossTabs(address);
  } catch (err) {
    console.error('error fetching logout address', err);
  }

  if (isWalletProvider) {
    preventRedirects();
  }

  store.dispatch(logoutAction());

  try {
    const needsCallbackUrl = isWalletProvider && !callbackUrl;
    const url = needsCallbackUrl ? window.location.origin : callbackUrl;

    await provider.logout({ callbackUrl: url });
    if (callbackUrl && providerType !== LoginMethodsEnum.wallet) {
      if (typeof onRedirect === 'function') {
        onRedirect(callbackUrl);
      } else {
        safeRedirect(callbackUrl);
      }
    }
  } catch (err) {
    console.error('error logging out', err);
  }
}
