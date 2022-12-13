import { useEffect, useRef } from 'react';
import BigNumber from 'bignumber.js';
import { useGetAccountInfo, useGetLoginInfo } from 'hooks';
import { getTokenExpiration } from 'services/nativeAuth/methods';
import { logout } from 'utils/logout';

export const useNativeAuthLogout = () => {
  const { address } = useGetAccountInfo();
  const { tokenLogin } = useGetLoginInfo();

  const {
    isExpired: isNativeAuthTokenExpired,
    secondsUntilExpires,
    expiresAt
  } = getTokenExpiration(tokenLogin?.nativeAuthToken);

  const plannedLogoutRef = useRef('');
  const timeoutRef = useRef<NodeJS.Timeout>();

  // logout if token is expired
  useEffect(() => {
    if (address && isNativeAuthTokenExpired) {
      logout();
    }
  }, [isNativeAuthTokenExpired, address]);

  // plan logout for existing token
  useEffect(() => {
    const secondsUntilExpiresBN = new BigNumber(String(secondsUntilExpires));
    const plannedLogoutKey = `${address}_${expiresAt}`;
    const plannedLogoutSet = plannedLogoutRef.current === plannedLogoutKey;

    const isValidInterval =
      secondsUntilExpires && secondsUntilExpiresBN.isGreaterThan(0);

    if (!isValidInterval || plannedLogoutSet) {
      return;
    }

    plannedLogoutRef.current = plannedLogoutKey;

    clearTimeout(timeoutRef.current);
    const milisecondsUntilLogout = secondsUntilExpiresBN.times(1000).toNumber();

    timeoutRef.current = setTimeout(() => {
      logout();
    }, milisecondsUntilLogout);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [expiresAt, address]);

  return null;
};
