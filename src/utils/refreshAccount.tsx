import { providerSelector } from '../redux/selectors';
import { getAccount, getAddress, getLatestNonce } from './index';
import { store } from '../redux/store';
import { setAccount } from '../redux/slices';

const setNewAccount = () => {
  getAddress()
    .then((address: string) => {
      getAccount(address)
        .then((account) => {
          store.dispatch(
            setAccount({
              balance: account.balance.toString(),
              address,
              nonce: getLatestNonce(account)
            })
          );
        })
        .catch((e) => {
          console.error('Failed getting account ', e);
        });
    })
    .catch((e) => {
      console.error('Failed getting address ', e);
    });
};

export function refreshAccount() {
  const provider = providerSelector(store.getState());
  if (provider.isInitialized()) {
    setNewAccount();
  } else {
    provider
      .init()
      .then((initialised) => {
        if (!initialised) {
          return;
        }
        setNewAccount();
      })
      .catch((e) => {
        console.error('Failed initializing provider ', e);
      });
  }
}
