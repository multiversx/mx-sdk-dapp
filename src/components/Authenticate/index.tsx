import * as React from 'react';
import { Address } from '@elrondnetwork/erdjs';
import { useDispatch, useSelector } from 'react-redux';
import { matchPath, Navigate, useLocation } from 'react-router-dom';
import Loader from 'UI/Loader';
import useSetProvider from './useSetProvider';
import { RouteType } from '../../types';
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
  setChainID,
  setLedgerAccount,
  setProvider,
  setWalletLogin
} from '../../redux/slices';

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
    if (walletLogin != null) {
      setLoading(true);
      const provider = newWalletProvider(network);
      getAddress()
        .then((address) => {
          dispatch(setWalletLogin(null));
          dispatch(setProvider(provider));
          dispatch({ type: 'login', address, loginMethod: 'wallet' });
          getAccount(address)
            .then((account) => {
              dispatch({
                type: 'setAccount',
                account: {
                  balance: account.balance.toString(),
                  address,
                  nonce: getLatestNonce(account)
                }
              });
              setLoading(false);
            })
            .catch((e) => {
              console.error('Failed getting account ', e);
              setLoading(false);
            });
        })
        .catch((e) => {
          console.error('Failed getting address ', e);
          setLoading(false);
        });
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

  const fetchAccount = () => {
    if (address && isLoggedIn) {
      proxy
        .getAccount(new Address(address))
        .then((account) => {
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
          setLoading(false);
        });

      if (ledgerLogin != null && !ledgerAccount) {
        dispatch(
          setLedgerAccount({
            index: ledgerLogin.index,
            address
          })
        );
      }
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(fetchAccount, [address]);

  if (redirect) {
    return <Navigate to={unlockRoute} />;
  }

  if (loading && walletLogin) {
    return <Loader />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authenticate;
