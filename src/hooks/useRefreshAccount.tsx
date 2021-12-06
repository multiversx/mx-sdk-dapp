import { useDispatch, useSelector } from 'react-redux';
import { providerSelector } from '../redux/selectors/networkConfigSelectors';
import { getAccount } from '../utils/getAccount';
import getAddress from '../utils/getAddress';
import { getLatestNonce } from '../utils/getLatestNonce';

export default function useRefreshAccount() {
  const provider = useSelector(providerSelector);
  const dispatch = useDispatch();

  const setAccount = () => {
    getAddress()
      .then((address: string) => {
        getAccount(address)
          .then((account) => {
            dispatch(setAccount());
            dispatch({
              type: 'setAccount',
              account: {
                balance: account.balance.toString(),
                address,
                nonce: getLatestNonce(account)
              }
            });
          })
          .catch((e) => {
            console.error('Failed getting account ', e);
          });
      })
      .catch((e) => {
        console.error('Failed getting address ', e);
      });
  };

  return () =>
    provider.isInitialized()
      ? setAccount()
      : provider
          .init()
          .then((initialised) => {
            if (!initialised) {
              return;
            }
            setAccount();
          })
          .catch((e) => {
            console.error('Failed initializing provider ', e);
          });
}
