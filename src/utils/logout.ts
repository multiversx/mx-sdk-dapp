import { logoutAction } from '../redux/commonActions';
import { providerSelector } from '../redux/selectors';
import { store } from '../redux/store';

export function logout(callbackUrl?: string) {
  const provider = providerSelector(store.getState());
  provider.logout({ callbackUrl });
  store.dispatch(logoutAction());
}
