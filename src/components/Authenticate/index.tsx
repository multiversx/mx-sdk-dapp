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

  const [authenticatedRoutes] = React.useState(
    routes.filter((route) => Boolean(route.authenticatedRoute))
  );
  const { pathname } = useLocation();
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  useSetProvider();

  const tryAuthenticateUser = async () => {
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
  };

  React.useEffect(() => {
    tryAuthenticateUser();
  }, [provider, proxy]);

  const privateRoute = authenticatedRoutes.some(
    ({ path }) => matchPath(pathname, path) !== null
  );

  const redirect = privateRoute && !isLoggedIn && walletLogin == null;

  React.useEffect(() => {
    refreshChainID();
  }, [chainId.valueOf()]);

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

  const fetchAccount = async () => {
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

        if (ledgerAccount === null && ledgerLogin !== null) {
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
  };

  React.useEffect(() => {
    fetchAccount();
  }, [address, ledgerLogin]);

  if (redirect) {
    return <Navigate to={unlockRoute} />;
  }

  if (loading && walletLogin) {
    return <Loader />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authenticate;
