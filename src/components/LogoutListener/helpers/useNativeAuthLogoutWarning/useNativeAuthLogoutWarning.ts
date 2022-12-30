import { useEffect, useRef } from 'react';
import BigNumber from 'bignumber.js';
import { useGetAccountInfo } from 'hooks';
import { useSelector } from 'reduxStore/DappProviderContext';
import { loginInfoSelector } from 'reduxStore/selectors';
import { getTokenExpiration } from 'services/nativeAuth/methods';
import { addNewCustomToast, storage } from 'utils';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { localStorageKeys } from 'utils/storage/local';

import { tokenExpierationToastWarningSeconds } from '../../constants';
import { getHumanReadableTokenExpirationTime } from './helpers';

export const useNativeAuthLogoutWarning = () => {
  const { address } = useGetAccountInfo();
  const { tokenLogin } = useSelector(loginInfoSelector);

  const { secondsUntilExpires, expiresAt } = getTokenExpiration(
    tokenLogin?.nativeAuthToken
  );

  const warningLogoutTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Handle the actual logout functionality.
    const secondsUntilExpiresBN = new BigNumber(String(secondsUntilExpires));
    const millisecondsUntilLogout = secondsUntilExpiresBN.times(1000);

    if (!secondsUntilExpires || secondsUntilExpiresBN.lte(0)) {
      return;
    }

    // Handle the logout warning popup.
    if (!storage.local.getItem(localStorageKeys.logoutWarningDismissed)) {
      clearTimeout(warningLogoutTimeoutRef.current);

      const logoutWarningOffsetSeconds = new BigNumber(
        tokenExpierationToastWarningSeconds
      );

      const logoutWarningOffsetMilliseconds =
        logoutWarningOffsetSeconds.times(1000);

      const millisecondsUntilLogoutWarning = secondsUntilExpiresBN
        .times(1000)
        .minus(logoutWarningOffsetMilliseconds);

      const readableMinutesUntilLogout = getHumanReadableTokenExpirationTime(
        millisecondsUntilLogout
      );

      const timeoutUntilLogoutWarning = millisecondsUntilLogoutWarning.lte(0)
        ? 0
        : millisecondsUntilLogoutWarning.toNumber();

      warningLogoutTimeoutRef.current = setTimeout(() => {
        addNewCustomToast({
          toastId: 'nativeAuthTokenExpiration',
          type: 'custom',
          title: 'Session Expiration Warning',
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
      clearTimeout(warningLogoutTimeoutRef.current);
    };
  }, [expiresAt, address]);

  return null;
};
