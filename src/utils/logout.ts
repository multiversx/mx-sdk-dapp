import { logoutAction } from 'redux/commonActions';
import { providerSelector } from 'redux/selectors/networkConfigSelectors';
import { store } from 'redux/store';
import { LoginMethodsEnum } from 'types';
import { getIsLoggedIn } from 'utils/getIsLoggedIn';
import { getIsProviderEqualTo } from 'utils/network';

export async function logout(
  callbackUrl?: string,
  onRedirect?: (callbackUrl?: string) => void
) {
  const provider = providerSelector(store.getState());
  const isLoggedIn = getIsLoggedIn();

  if (!isLoggedIn) {
    return;
  }

  store.dispatch(logoutAction());

  try {
    await provider.logout({ callbackUrl });

    if (callbackUrl && !getIsProviderEqualTo(LoginMethodsEnum.wallet)) {
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
