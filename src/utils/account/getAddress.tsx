import {
  addressSelector,
  isLoggedInSelector,
  providerSelector,
  walletLoginSelector
} from '../../redux/selectors';
import { store } from '../../redux/store';
import { loginMethodsEnum } from '../../types/enums';
import { getProviderType } from '../provider';
import { addressIsValid } from './addressIsValid';

export function getAddress(): Promise<string> {
  const { search } = window.location;
  const appState = store.getState();
  const provider = providerSelector(appState);
  const address = addressSelector(appState);
  const loggedIn = isLoggedInSelector(appState);
  const walletLogin = walletLoginSelector(appState);
  const providerType = getProviderType(provider);

  return providerType != loginMethodsEnum.none &&
    providerType !== loginMethodsEnum.wallet
    ? provider.getAddress()
    : new Promise((resolve) => {
        if (walletLogin != null) {
          const urlSearchParams = new URLSearchParams(search);
          const params = Object.fromEntries(urlSearchParams as any);
          if (addressIsValid(params.address)) {
            resolve(params.address);
          }
        }
        if (loggedIn) {
          resolve(address);
        }
        resolve('');
      });
}
