import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'redux/DappProviderContext';
import {
  chainIDSelector,
  isAccountLoadingSelector,
  isLoggedInSelector,
  proxySelector,
  walletLoginSelector
} from 'redux/selectors';
import { setChainID } from 'redux/slices';
import { RouteType } from 'types';

const AuthenticatedRoutesWrapper = ({
  children,
  routes,
  unlockRoute,
  onRedirect
}: {
  children: React.ReactNode;
  routes: RouteType[];
  unlockRoute: string;
  onRedirect?: (unlockRoute?: string) => void;
}) => {
  const isLoggedIn = useSelector(isLoggedInSelector);

  const chainId = useSelector(chainIDSelector);
  const isAccountLoading = useSelector(isAccountLoadingSelector);
  const proxy = useSelector(proxySelector);
  const walletLogin = useSelector(walletLoginSelector);

  const { pathname } = window.location;
  const dispatch = useDispatch();

  const authenticatedRoutesRef = useRef(
    routes.filter((route) => Boolean(route.authenticatedRoute))
  );

  useEffect(() => {
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

  const isOnAuthenticatedRoute = authenticatedRoutesRef.current.some(
    ({ path }) => pathname === path
  );

  const shouldRedirect =
    isOnAuthenticatedRoute && !isLoggedIn && walletLogin == null;

  if (isAccountLoading || walletLogin) {
    return null;
  }

  if (shouldRedirect) {
    if (onRedirect) {
      onRedirect(unlockRoute);
    } else {
      window.location.href = unlockRoute;
    }
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthenticatedRoutesWrapper;
