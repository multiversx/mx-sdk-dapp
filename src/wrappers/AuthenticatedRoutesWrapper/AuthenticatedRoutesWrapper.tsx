import React, { ReactNode, useEffect } from 'react';
import BigNumber from 'bignumber.js';
import { useGetAccount } from 'hooks/account/useGetAccount';
import { useSelector } from 'reduxStore/DappProviderContext';
import {
  isAccountLoadingSelector,
  walletLoginSelector
} from 'reduxStore/selectors';

import { addressSelector } from 'reduxStore/selectors/accountInfoSelectors';
import { store } from 'reduxStore/store';
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
  const isAccountLoading = useSelector(isAccountLoadingSelector);
  const account = useGetAccount();
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

  useEffect(() => {
    const storeAddress = addressSelector(store.getState());
    const hasAddress = Boolean(storeAddress && account.address);

    console.log({
      hasAddress,
      isOnAuthenticatedRoute,
      address: account.address,
      storeAddress
    });

    const shouldRedirect =
      isOnAuthenticatedRoute &&
      !hasAddress &&
      walletLogin == null &&
      !isWebviewLogin;

    if (!shouldRedirect) {
      return;
    }

    if (onRedirect) {
      return onRedirect(unlockRoute);
    }

    safeRedirect({ url: unlockRoute });
  }, [
    isOnAuthenticatedRoute,
    account.address,
    walletLogin,
    isWebviewLogin,
    unlockRoute,
    account.address
  ]);

  const isValidWalletLoginAttempt = walletLogin != null && searchParamAddress;
  const isBalanceReady = !new BigNumber(account.balance).isNaN();

  if ((isAccountLoading && !isBalanceReady) || isValidWalletLoginAttempt) {
    return null;
  }

  return <>{children}</>;
};
