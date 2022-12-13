import { getUnixTimestamp } from 'utils/dateTime/getUnixTimestamp';
import { decodeNativeAuthToken } from '../helpers/decodeNativeAuthToken';

export interface GetIsTokenExpiredReturnType {
  isExpired: boolean;
  expiresAt?: number;
  secondsUntilExpires?: number;
}

export const getIsTokenExpired = (
  token?: string
): GetIsTokenExpiredReturnType => {
  const decodedToken = decodeNativeAuthToken(token);
  if (!decodedToken) {
    return {
      isExpired: false
    };
  }

  const unixNow = getUnixTimestamp();
  const { ttl, extraInfo } = decodedToken;

  const timestamp: number = extraInfo.timestamp;

  if (!timestamp) {
    return {
      isExpired: false
    };
  }

  const expiresAt = timestamp + ttl;

  const isExpired = unixNow > expiresAt;

  const secondsUntilExpires = expiresAt - unixNow;

  return { isExpired, expiresAt, secondsUntilExpires };
};
