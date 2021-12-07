import * as React from 'react';
import { Address } from '@elrondnetwork/erdjs';
import { useDispatch, useSelector } from 'react-redux';
import { matchPath, Navigate, useLocation } from 'react-router-dom';
import Loader from 'UI/Loader';
import useSetProvider from './useSetProvider';
import { LoginMethodsEnum, RouteType } from '../../types';
import {
  getAccount,
  newWalletProvider,
  getAddress,
  getLatestNonce
} from '../../utils';
import {
  addressSelector,
  chainIDSelector,
  isLoggedInSelector,
  ledgerAccountSelector,
  ledgerLoginSelector,
  networkSelector,
  providerSelector,
  proxySelector,
  walletLoginSelector
} from '../../redux/selectors';
import {
  setAccount,
  setChainID,
  setLedgerAccount,
  setProvider,
  setWalletLogin
} from '../../redux/slices';
import { loginAction } from '../../redux/commonActions';

const Authenticate = ({
  children,
  routes,
  unlockRoute
}: {
  children: React.ReactNode;
  routes: RouteType[];
  unlockRoute: string;
}) => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const address = useSelector(addressSelector);
  const ledgerAccount = useSelector(ledgerAccountSelector);
  const ledgerLogin = useSelector(ledgerLoginSelector);
  const chainId = useSelector(chainIDSelector);
  const network = useSelector(networkSelector);
  const provider = useSelector(providerSelector);
  const proxy = useSelector(proxySelector);
  const walletLogin = useSelector(walletLoginSelector);

  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const authenticatedRoutesRef = React.useRef(
    routes.filter((route) => Boolean(route.authenticatedRoute))
  );
  const [loading, setLoading] = React.useState(false);

  useSetProvider();

  React.useEffect(() => {
    tryAuthenticateUser();
  }, [provider, proxy]);

  React.useEffect(() => {
    refreshChainID();
  }, [chainId.valueOf()]);

  React.useEffect(() => {
    fetchAccount();
  }, [address, ledgerLogin]);

  async function tryAuthenticateUser() {
    try {
      if (walletLogin != null && network != null) {
        setLoading(true);
        const provider = newWalletProvider(network);
        const address = await getAddress();
        dispatch(setWalletLogin(null));
        dispatch(setProvider(provider));
        dispatch(
          loginAction({ address, loginMethod: LoginMethodsEnum.wallet })
        );
        const account = await getAccount(address);
        dispatch(
          setAccount({
            balance: account.balance.toString(),
            address,
            nonce: getLatestNonce(account)
          })
        );
        setLoading(false);
      }
    } catch (e) {
      console.error('Failed authenticating user ', e);
      setLoading(false);
    }
  }

  function refreshChainID() {
    if (chainId.valueOf() === '-1') {
      proxy
        .getNetworkConfig()
        .then((networkConfig) => {
          dispatch(setChainID(networkConfig.ChainID.valueOf()));
        })
        .catch((e) => {
          console.error('To do ', e);
        });
    }
  }

  async function fetchAccount() {
    try {
      if (address != null && isLoggedIn) {
        const account = await proxy.getAccount(new Address(address));
        dispatch(
          setAccount({
            balance: account.balance.toString(),
            address,
            nonce: getLatestNonce(account)
          })
        );

        if (ledgerAccount == null && ledgerLogin != null) {
          dispatch(
            setLedgerAccount({
              index: ledgerLogin.index,
              address
            })
          );
        }
      }
    } catch (e) {
      console.error('Failed getting account ', e);
      setLoading(false);
    }
  }

  const isOnAuthenticatedRoute = authenticatedRoutesRef.current.some(
    ({ path }) => matchPath(pathname, path) !== null
  );

  const shouldRedirect =
    isOnAuthenticatedRoute && !isLoggedIn && walletLogin == null;

  if (shouldRedirect) {
    return <Navigate to={unlockRoute} />;
  }

  if (loading && walletLogin) {
    return <Loader />;
  }

  return children;
};

export default Authenticate;
