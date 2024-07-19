import { useEffect, useRef } from 'react';
import BigNumber from 'bignumber.js';
import { useGetAccountInfo } from 'hooks';
import { useSelector } from 'reduxStore/DappProviderContext';
import { logoutRouteSelector, loginInfoSelector } from 'reduxStore/selectors';
import { getTokenExpiration } from 'services/nativeAuth/methods';
import { logout } from 'utils/logout';
import { getWebviewToken } from 'utils/account/getWebviewToken';

export const useNativeAuthLogout = () => {
  const { address } = useGetAccountInfo();
  const { tokenLogin } = useSelector(loginInfoSelector);
  const logoutRoute = useSelector(logoutRouteSelector);

  const {
    isExpired: isNativeAuthTokenExpired,
    secondsUntilExpires,
    expiresAt
  } = getTokenExpiration(tokenLogin?.nativeAuthToken);

  const plannedLogoutRef = useRef('');
  const logoutTimeoutRef = useRef<NodeJS.Timeout>();

  // logout if token is expired
  useEffect(() => {
    if (address && isNativeAuthTokenExpired) {
      logout(logoutRoute);
    }
  }, [isNativeAuthTokenExpired, address, logoutRoute]);

  // plan logout for existing token
  useEffect(() => {
    const isWebviewLogin = Boolean(getWebviewToken());

    // prevent unexpected logout if webview login
    if (!address || isWebviewLogin) {
      return;
    }

    // Handle the actual logout functionality.
    const secondsUntilExpiresBN = new BigNumber(String(secondsUntilExpires));
    const plannedLogoutKey = `${address}_${expiresAt}`;
    const plannedLogoutSet = plannedLogoutRef.current === plannedLogoutKey;

    const isValidInterval =
      secondsUntilExpires && secondsUntilExpiresBN.isGreaterThan(0);

    if (!isValidInterval || plannedLogoutSet) {
      return;
    }

    plannedLogoutRef.current = plannedLogoutKey;

    clearTimeout(logoutTimeoutRef.current);
    const millisecondsUntilLogout = secondsUntilExpiresBN.times(1000);

    logoutTimeoutRef.current = setTimeout(() => {
      logout(logoutRoute);
    }, millisecondsUntilLogout.toNumber());

    return () => {
      clearTimeout(logoutTimeoutRef.current);
    };
  }, [expiresAt, address, logoutRoute]);

  return null;
};
