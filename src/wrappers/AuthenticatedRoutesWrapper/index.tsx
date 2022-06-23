import React, { useRef } from 'react';
import { useSelector } from 'reduxStore/DappProviderContext';
import {
  isAccountLoadingSelector,
  isLoggedInSelector,
  walletLoginSelector
} from 'reduxStore/selectors';

import { RouteType } from 'types';
import { safeRedirect } from '../../utils';

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
      safeRedirect(unlockRoute);
    }
    return null;
  }

  return <>{children}</>;
};

export default AuthenticatedRoutesWrapper;
