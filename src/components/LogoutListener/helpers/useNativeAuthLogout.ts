import { useEffect, useRef } from 'react';
import BigNumber from 'bignumber.js';
import { useGetAccountInfo } from 'hooks';
import { useSelector } from 'reduxStore/DappProviderContext';
import { loginInfoSelector } from 'reduxStore/selectors';
import { getTokenExpiration } from 'services/nativeAuth/methods';
import { logout } from 'utils/logout';

export const useNativeAuthLogout = () => {
  const { address } = useGetAccountInfo();
  const { tokenLogin } = useSelector(loginInfoSelector);

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
      logout();
    }
  }, [isNativeAuthTokenExpired, address]);

  // plan logout for existing token
  useEffect(() => {
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
      logout();
    }, millisecondsUntilLogout.toNumber());

    return () => {
      clearTimeout(logoutTimeoutRef.current);
    };
  }, [expiresAt, address]);

  return null;
};
