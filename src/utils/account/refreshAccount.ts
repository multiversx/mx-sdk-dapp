import { getAddress } from 'methods/account/getAddress';
import { getLatestNonce } from 'methods/account/getLatestNonce';
import { getNetworkConfig } from 'methods/network/getNetworkConfig';
import { getAccountProvider } from 'providers/helpers/accountProvider';
import { setAccount } from 'store/actions';
import { fetchAccount } from './fetchAccount';
import { trimUsernameDomain } from './trimUsernameDomain';

const setNewAccount = async () => {
  try {
    const address = getAddress();
    const { network } = getNetworkConfig();

    try {
      const account = await fetchAccount({
        address,
        baseURL: network.apiAddress
      });

      if (account != null) {
        const accountData = {
          ...account,
          username: trimUsernameDomain(account.username),
          nonce: getLatestNonce(account)
        };

        setAccount(accountData);

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
