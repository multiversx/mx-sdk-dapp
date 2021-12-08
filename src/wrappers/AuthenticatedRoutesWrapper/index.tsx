import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { matchPath } from 'react-router-dom';
import Loader from 'UI/Loader';
import {
  addressSelector,
  chainIDSelector,
  isLoggedInSelector,
  ledgerAccountSelector,
  ledgerLoginSelector,
  proxySelector,
  walletLoginSelector
} from '../../redux/selectors';
import { setAccount, setChainID, setLedgerAccount } from '../../redux/slices';
import { RouteType } from '../../types';
import { getAccount, getLatestNonce } from '../../utils';

const AuthenticatedRoutesWrapper = ({
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
  const proxy = useSelector(proxySelector);
  const walletLogin = useSelector(walletLoginSelector);

  const { pathname } = window.location;
  const dispatch = useDispatch();

  const authenticatedRoutesRef = React.useRef(
    routes.filter((route) => Boolean(route.authenticatedRoute))
  );
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    refreshChainID();
  }, [chainId.valueOf()]);

  React.useEffect(() => {
    fetchAccount();
  }, [address, ledgerLogin]);

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
      if (address && isLoggedIn) {
        const account = await getAccount(address);
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
    window.location.href = unlockRoute;
    return null;
  }

  if (loading && walletLogin) {
    return <Loader />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthenticatedRoutesWrapper;
