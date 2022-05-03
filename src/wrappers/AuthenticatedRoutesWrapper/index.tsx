import React, { useRef } from 'react';
import { useSelector } from 'redux/DappProviderContext';
import {
  isAccountLoadingSelector,
  isLoggedInSelector,
  walletLoginSelector
} from 'redux/selectors';

import { RouteType } from 'types';
import IdleTimer from './IdleTimer';

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

  const isAccountLoading = useSelector(isAccountLoadingSelector);

  const walletLogin = useSelector(walletLoginSelector);
  const { pathname } = window.location;

  const authenticatedRoutesRef = useRef(
    routes.filter((route) => Boolean(route.authenticatedRoute))
  );

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

  return (
    <React.Fragment>
      <IdleTimer>{children}</IdleTimer>
    </React.Fragment>
  );
};

export default AuthenticatedRoutesWrapper;
