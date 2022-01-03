import { providerSelector } from 'redux/selectors';
import { setAccount } from 'redux/slices';
import { store } from 'redux/store';
import getAccount from './getAccount';
import getAddress from './getAddress';
import getLatestNonce from './getLatestNonce';

const setNewAccount = async () => {
  try {
    const address = await getAddress();
    try {
      const account = await getAccount(address);
      const accountData = {
        balance: account.balance.toString(),
        address,
        nonce: getLatestNonce(account)
      };
      store.dispatch(setAccount(accountData));
      return accountData;
    } catch (e) {
      console.error('Failed getting account ', e);
    }
  } catch (e) {
    console.error('Failed getting address ', e);
  }
  return undefined;
};

export async function refreshAccount() {
  const provider = providerSelector(store.getState());

  if (provider.isInitialized()) {
    return setNewAccount();
  } else {
    try {
      const initialized = await provider.init();
      if (!initialized) {
        return;
      }
      return setNewAccount();
    } catch (e) {
      console.error('Failed initializing provider ', e);
    }
  }
  return undefined;
}
