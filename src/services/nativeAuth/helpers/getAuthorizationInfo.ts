import { getHumanReadableTokenExpirationTime } from 'components/LogoutListener/helpers/useNativeAuthLogoutWarning/helpers';
import { useSelector } from 'reduxStore/DappProviderContext';
import { tokenLoginSelector } from 'reduxStore/selectors';
import { WithClassnameType } from 'UI/types';
import { decodeLoginToken } from './decodeLoginToken';

export const getAuthorizationInfo = (
  token?: string,
  className?: WithClassnameType['className']
) => {
  const tokenLogin = useSelector(tokenLoginSelector);
  const loginToken = tokenLogin?.loginToken ?? token;

  if (!loginToken) {
    return;
  }

  const decoded = decodeLoginToken(loginToken);

  if (!decoded) {
    return;
  }

  return {
    className,
    url: decoded.origin,
    duration: getHumanReadableTokenExpirationTime(decoded.ttl * 1000)
  };
};
