import { getUnixTimestamp } from 'utils/dateTime/getUnixTimestamp';
import { decodeNativeAuthToken } from '../helpers/decodeNativeAuthToken';

export interface GetTokenExpirationReturnType {
  isExpired: boolean;
  expiresAt?: number;
  secondsUntilExpires?: number;
}

const notFound = {
  isExpired: false
};

export const getTokenExpiration = (
  token?: string
): GetTokenExpirationReturnType => {
  if (!token) {
    return notFound;
  }

  const decodedToken = decodeNativeAuthToken(token);

  if (!decodedToken) {
    return notFound;
  }

  const unixNow = getUnixTimestamp();
  const { ttl, extraInfo } = decodedToken;

  const timestamp = extraInfo?.timestamp;

  if (!timestamp || !ttl) {
    return notFound;
  }

  const expiresAt = timestamp + ttl;
  const isExpired = unixNow > expiresAt;
  const secondsUntilExpires = expiresAt - unixNow;

  return { isExpired, expiresAt, secondsUntilExpires };
};
