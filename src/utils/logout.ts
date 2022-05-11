import { getAccountProvider } from 'providers/accountProvider';
import { getProviderType } from 'providers/utils';
import { logoutAction } from 'redux/commonActions';
import { store } from 'redux/store';
import { LoginMethodsEnum } from 'types';
import { getIsLoggedIn } from 'utils/getIsLoggedIn';

export async function logout(
  callbackUrl?: string,
  onRedirect?: (callbackUrl?: string) => void
) {
  const provider = getAccountProvider();
  const providerType = getProviderType(provider);
  const isLoggedIn = getIsLoggedIn();
  if (!isLoggedIn || !provider) {
    return;
  }

  store.dispatch(logoutAction());

  try {
    const isWalletProvider = providerType === LoginMethodsEnum.wallet;
    const needsCallbackUrl = isWalletProvider && !callbackUrl;
    const url = needsCallbackUrl ? window.location.origin : callbackUrl;

    await provider.logout({ callbackUrl: url });
    if (callbackUrl && providerType !== LoginMethodsEnum.wallet) {
      if (typeof onRedirect === 'function') {
        onRedirect(callbackUrl);
      } else {
        window.location.href = callbackUrl;
      }
    }
  } catch (err) {
    console.error('error logging out', err);
  }
}
