import { getAccountProvider } from 'providers';
import { setAccount } from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import { getAccount } from './getAccount';
import { getAddress } from './getAddress';
import { getLatestNonce } from './getLatestNonce';

const setNewAccount = async () => {
  try {
    const address = await getAddress();

    try {
      const account = await getAccount(address);

      if (account != null) {
        const accountData = {
          ...account,
          nonce: getLatestNonce(account)
        };

        store.dispatch(setAccount(accountData));

        return accountData;
      }
    } catch (e) {
      console.error('Failed getting account ', e);
    }
  } catch (e) {
    console.error('Failed getting address ', e);
  }

  return null;
};

export async function refreshAccount() {
  const provider = getAccountProvider();

  if (provider == null) {
    throw 'Provider not initialized';
  }

  if (!provider.isInitialized || provider.isInitialized()) {
    return setNewAccount();
  }

  try {
    if (!provider.init) {
      throw 'Current provider does not have init() function';
    }

    const initialized = await provider.init();

    if (!initialized) {
      return;
    }

    return setNewAccount();
  } catch (e) {
    console.error('Failed initializing provider ', e);
  }

  return undefined;
}
