import { logoutAction } from 'redux/commonActions';
import { providerSelector } from 'redux/selectors';
import { store } from 'redux/store';

export async function logout(callbackUrl?: string) {
  const provider = providerSelector(store.getState());
  store.dispatch(logoutAction());
  try {
    await provider.logout({ callbackUrl });
  } catch (err) {
    console.error('error logging out', err);
  }
}
