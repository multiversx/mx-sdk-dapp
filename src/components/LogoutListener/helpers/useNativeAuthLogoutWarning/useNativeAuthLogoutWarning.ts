import { useEffect, useRef } from 'react';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import BigNumber from 'bignumber.js';
import { useGetAccountInfo } from 'hooks';
import { useSelector } from 'reduxStore/DappProviderContext';
import { loginInfoSelector } from 'reduxStore/selectors';
import { getTokenExpiration } from 'services/nativeAuth/methods';
import { addNewCustomToast } from 'utils';

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

    if (!secondsUntilExpires || secondsUntilExpiresBN.isLessThanOrEqualTo(0)) {
      return;
    }

    // Handle the logout warning popup.
    if (tokenLogin?.nativeAuthConfig?.tokenExpirationToastWarningSeconds) {
      clearTimeout(warningLogoutTimeoutRef.current);

      const logoutWarningOffsetSeconds = new BigNumber(
        tokenLogin.nativeAuthConfig.tokenExpirationToastWarningSeconds
      );

      const logoutWarningOffsetMilliseconds =
        logoutWarningOffsetSeconds.times(1000);

      const millisecondsUntilLogoutWarning = secondsUntilExpiresBN
        .times(1000)
        .minus(logoutWarningOffsetMilliseconds);

      const readableMinutesUntilLogout = getHumanReadableTokenExpirationTime(
        millisecondsUntilLogout.toNumber()
      );

      const timeoutUntilLogoutWarning =
        millisecondsUntilLogoutWarning.isLessThanOrEqualTo(0)
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
      }, timeoutUntilLogoutWarning);
    }

    return () => {
      clearTimeout(warningLogoutTimeoutRef.current);
    };
  }, [expiresAt, address, tokenLogin?.nativeAuthConfig]);

  return null;
};
