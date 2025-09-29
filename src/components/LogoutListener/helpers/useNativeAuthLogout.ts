import { useEffect, useRef } from 'react';
import BigNumber from 'bignumber.js';
import { useGetAccountInfo } from 'hooks';
import { useSelector } from 'reduxStore/DappProviderContext';
import { logoutRouteSelector, loginInfoSelector } from 'reduxStore/selectors';
import { getTokenExpiration } from 'services/nativeAuth/methods';
import { getWebviewToken } from 'utils/account/getWebviewToken';
import { logout } from 'utils/logout';

export const useNativeAuthLogout = () => {
  const { address } = useGetAccountInfo();
  const { tokenLogin } = useSelector(loginInfoSelector);
  const logoutRoute = useSelector(logoutRouteSelector);

  const nativeAuthToken = tokenLogin?.nativeAuthToken;
  const {
    isExpired: isNativeAuthTokenExpired,
    secondsUntilExpires,
    expiresAt
  } = getTokenExpiration(nativeAuthToken);

  const plannedLogoutRef = useRef('');
  const logoutTimeoutRef = useRef<NodeJS.Timeout>();

  // logout if token is expired
  useEffect(() => {
    if (
      address &&
      nativeAuthToken &&
      !getWebviewToken() &&
      isNativeAuthTokenExpired
    ) {
      console.log('Loggin out. Native auth token expired.');
      logout(logoutRoute);
    }
  }, [address, nativeAuthToken, isNativeAuthTokenExpired, logoutRoute]);

  // plan logout for existing token
  useEffect(() => {
    // Reset on every new token
    plannedLogoutRef.current = '';
    clearTimeout(logoutTimeoutRef.current);

    const isWebviewLogin = Boolean(getWebviewToken());

    // prevent unexpected logout if webview login
    if (!address || isWebviewLogin || !nativeAuthToken) {
      return;
    }

    // Handle the actual logout functionality.
    const secondsUntilExpiresBN = new BigNumber(
      String(secondsUntilExpires || 0)
    );

    const plannedLogoutKey = `${address}_${expiresAt}`;
    const isValidInterval = secondsUntilExpiresBN.isGreaterThan(1);

    if (!isValidInterval) {
      return;
    }

    plannedLogoutRef.current = plannedLogoutKey;
    const millisecondsUntilLogout = secondsUntilExpiresBN.times(1000);

    console.log('millisecondsUntilLogout', millisecondsUntilLogout.toNumber());

    logoutTimeoutRef.current = setTimeout(() => {
      if (plannedLogoutRef.current === plannedLogoutKey) {
        console.log('Loggin out from timeout');
        logout(logoutRoute);
      }
    }, millisecondsUntilLogout.toNumber());

    return () => {
      clearTimeout(logoutTimeoutRef.current);
    };
  }, [address, logoutRoute, nativeAuthToken]);

  return null;
};
