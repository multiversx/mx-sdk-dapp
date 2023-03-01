import { MULTIVERSX_ORIGIN } from 'constants/index';
import { useSelector } from 'reduxStore/DappProviderContext';
import { tokenLoginSelector } from 'reduxStore/selectors';
import { decodeLoginToken } from './decodeLoginToken';

export const getIsNativeAuthSingingForbidden = (token?: string) => {
  const tokenLogin = useSelector(tokenLoginSelector);
  const loginToken = tokenLogin?.loginToken ?? token;

  if (!loginToken) {
    return;
  }

  const decoded = decodeLoginToken(loginToken);

  if (!decoded) {
    return;
  }

  return decoded.origin.toLowerCase().startsWith(MULTIVERSX_ORIGIN);
};
