import { getAddress } from 'methods/account/getAddress';
import { getIsLoggedIn } from 'methods/account/getIsLoggedIn';
import { getReconciledNonce } from 'methods/account/getLatestNonce';
import { getNetworkConfig } from 'methods/network/getNetworkConfig';
import { setAccountNonce } from 'store/actions/account/accountActions';
import { fetchAccount } from 'utils/account/fetchAccount';

export async function reconcileAccountNonce() {
  try {
    if (!getIsLoggedIn()) {
      return;
    }

    const address = getAddress();
    const account = await fetchAccount({
      address,
      baseURL: getNetworkConfig().network.apiAddress
    });

    if (account?.address !== address || getAddress() !== address) {
      return;
    }

    setAccountNonce(getReconciledNonce(account));
  } catch (error) {
    console.error('Failed reconciling the account nonce', error);
  }
}
