import { logoutAction } from 'redux/commonActions';
import { providerSelector } from 'redux/selectors';
import { store } from 'redux/store';
import { getIsLoggedIn } from 'utils/getIsLoggedIn';

export async function logout(callbackUrl?: string) {
  const provider = providerSelector(store.getState());
  const isLoggedIn = getIsLoggedIn();
  if (!isLoggedIn) {
    return;
  }
  try {
    await provider.logout({ callbackUrl });
    store.dispatch(logoutAction());
  } catch (err) {
    console.error('error logging out', err);
  }
}
