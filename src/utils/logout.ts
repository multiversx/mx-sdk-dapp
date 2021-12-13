import { logoutAction } from '../redux/commonActions';
import { providerSelector } from '../redux/selectors';
import { store } from '../redux/store';

export async function logout (callbackUrl?: string) {
  try {
    const provider = providerSelector(store.getState());

    await provider.logout({ callbackUrl });

    if (callbackUrl != null && window.location.href != callbackUrl) {
      window.location.href = callbackUrl;
    }

    store.dispatch(logoutAction());
  } catch (err) {
    console.error('error logging out', err);
  }
}
