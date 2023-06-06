import React, { ReactNode } from 'react';
import { useSelector } from 'reduxStore/DappProviderContext';
import {
  isAccountLoadingSelector,
  isLoggedInSelector,
  walletLoginSelector
} from 'reduxStore/selectors';

import { RouteType } from 'types';
import { safeRedirect } from 'utils/redirect';
import { matchRoute } from './helpers/matchRoute';

export const AuthenticatedRoutesWrapper = ({
  children,
  routes,
  unlockRoute,
  onRedirect
}: {
  children: ReactNode;
  routes: RouteType[];
  unlockRoute: string;
  onRedirect?: (unlockRoute?: string) => void;
}) => {
  const isLoggedIn = useSelector(isLoggedInSelector);

  const isAccountLoading = useSelector(isAccountLoadingSelector);

  const walletLogin = useSelector(walletLoginSelector);

  const getLocationPathname = () => {
    if (typeof window === 'undefined') {
      return '';
    }
    return window.location.pathname;
  };

  const isOnAuthenticatedRoute = matchRoute(routes, getLocationPathname());

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
