import { getHumanReadableTokenExpirationTime } from 'components/LogoutListener/helpers/useNativeAuthLogoutWarning/helpers';
import { useSelector } from 'reduxStore/DappProviderContext';
import { tokenLoginSelector } from 'reduxStore/selectors';
import { decodeLoginToken } from './decodeLoginToken';

export const getAuthorizationInfo = (token?: string) => {
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
    url: decoded.origin,
    duration: getHumanReadableTokenExpirationTime(decoded.ttl * 1000)
  };
};
