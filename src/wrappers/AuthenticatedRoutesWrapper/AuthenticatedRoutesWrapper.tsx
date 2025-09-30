import React, { ReactNode, useEffect } from 'react';
import BigNumber from 'bignumber.js';
import { useSelector } from 'reduxStore/DappProviderContext';
import {
  accountSelector,
  isAccountLoadingSelector,
  isLoggedInSelector,
  walletLoginSelector
} from 'reduxStore/selectors';

import { RouteType } from 'types';
import { getSearchParamAddress } from 'utils/account/getSearchParamAddress';
import { getWebviewToken } from 'utils/account/getWebviewToken';
import { isWindowAvailable } from 'utils/isWindowAvailable';
import { safeRedirect } from 'utils/redirect';
import { matchRoute } from './helpers/matchRoute';

export const AuthenticatedRoutesWrapper = ({
  children,
  routes,
  pathName,
  unlockRoute,
  onRedirect
}: {
  children: ReactNode;
  routes: RouteType[];
  pathName?: string;
  unlockRoute: string;
  onRedirect?: (unlockRoute?: string) => void;
}) => {
  const searchParamAddress = getSearchParamAddress();
  const isLoggedIn = useSelector(isLoggedInSelector);
  const isAccountLoading = useSelector(isAccountLoadingSelector);
  const account = useSelector(accountSelector);
  const walletLogin = useSelector(walletLoginSelector);
  const isWebviewLogin = Boolean(getWebviewToken());

  const getLocationPathname = () => {
    if (isWindowAvailable()) {
      return window.location.pathname;
    }
    return '';
  };

  const isOnAuthenticatedRoute = matchRoute(
    routes,
    pathName ?? getLocationPathname()
  );

  const shouldRedirect =
    isOnAuthenticatedRoute &&
    !isLoggedIn &&
    walletLogin == null &&
    !isWebviewLogin;

  useEffect(() => {
    if (!shouldRedirect) {
      return;
    }

    if (onRedirect) {
      return onRedirect(unlockRoute);
    }

    safeRedirect({ url: unlockRoute });
  }, [shouldRedirect, unlockRoute]);

  const isValidWalletLoginAttempt = walletLogin != null && searchParamAddress;
  const isBalanceReady = !new BigNumber(account.balance).isNaN();

  if ((isAccountLoading && !isBalanceReady) || isValidWalletLoginAttempt) {
    return null;
  }

  return <>{children}</>;
};
