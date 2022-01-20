import {
  addressSelector,
  isLoggedInSelector,
  providerSelector,
  walletLoginSelector
} from 'redux/selectors';
import { store } from 'redux/store';
import { LoginMethodsEnum } from 'types/enums';
import { getIsProviderEqualTo } from 'utils/network';
import { addressIsValid } from './addressIsValid';

export function getAddress(): Promise<string> {
  const { search } = window.location;
  const appState = store.getState();
  const provider = providerSelector(appState);
  const address = addressSelector(appState);
  const loggedIn = isLoggedInSelector(appState);
  const walletLogin = walletLoginSelector(appState);

  if (getIsProviderEqualTo(LoginMethodsEnum.ledger) && loggedIn) {
    return new Promise((resolve) => {
      resolve(address);
    });
  }

  return !getIsProviderEqualTo(LoginMethodsEnum.none) &&
    !getIsProviderEqualTo(LoginMethodsEnum.wallet)
    ? // TODO: does not take into account ledger locked see link for details:
      // https://github.com/ElrondNetwork/dapp/blob/d5c57695a10055f20d387ba064b6843606789ee9/src/helpers/accountMethods.tsx#L21
      provider.getAddress()
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

export default getAddress;
