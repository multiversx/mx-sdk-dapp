import { useEffect, useRef } from 'react';
import BigNumber from 'bignumber.js';
import { useGetAccountInfo } from 'hooks';
import { useSelector } from 'reduxStore/DappProviderContext';
import { loginInfoSelector } from 'reduxStore/selectors';
import {
  getTokenExpiration,
  getTokenExpirationTime
} from 'services/nativeAuth/methods';
import { logout } from 'utils/logout';
import { addNewCustomToast, storage } from 'utils';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { localStorageKeys } from 'utils/storage/local';

import { TIME_TO_SHOW_WARNING_BEFORE_LOGOUT } from '../constants';

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
  const warningLogoutTimeoutRef = useRef<NodeJS.Timeout>();

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

    // Handle the logout warning popup.
    if (!storage.local.getItem(localStorageKeys.logoutWarningDismissed)) {
      clearTimeout(warningLogoutTimeoutRef.current);

      const logoutWarningOffsetMinutes = new BigNumber(
        TIME_TO_SHOW_WARNING_BEFORE_LOGOUT
      );

      const logoutWarningOffsetMilliseconds = logoutWarningOffsetMinutes
        .times(60)
        .times(1000);

      const millisecondsUntilLogoutWarning = secondsUntilExpiresBN
        .times(1000)
        .minus(logoutWarningOffsetMilliseconds);

      const readableMinutesUntilLogout = getTokenExpirationTime(
        millisecondsUntilLogout
      );

      const timeoutUntilLogoutWarning = millisecondsUntilLogoutWarning.lte(0)
        ? 0
        : millisecondsUntilLogoutWarning.toNumber();

      warningLogoutTimeoutRef.current = setTimeout(() => {
        addNewCustomToast({
          toastId: 'nativeAuthTokenExpiration',
          type: 'custom',
          title: 'Token Expiration Warning',
          icon: faRefresh,
          message: `Your token will expire in ${readableMinutesUntilLogout}!`
        });

        storage.local.setItem({
          key: localStorageKeys.logoutWarningDismissed,
          data: true,
          expires: millisecondsUntilLogout
            .plus(Date.now())
            .dividedBy(1000)
            .integerValue(BigNumber.ROUND_FLOOR)
            .toNumber()
        });
      }, timeoutUntilLogoutWarning);
    }

    return () => {
      clearTimeout(logoutTimeoutRef.current);
      clearTimeout(warningLogoutTimeoutRef.current);
    };
  }, [expiresAt, address]);

  return null;
};
