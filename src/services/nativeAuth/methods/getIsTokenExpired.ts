import { getUnixTimestamp } from 'utils/dateTime/getUnixTimestamp';
import { decodeNativeAuthToken } from '../helpers/decodeNativeAuthToken';

export const getIsTokenExpired = (token?: string) => {
  const decodedToken = decodeNativeAuthToken(token);
  if (!decodedToken) {
    return false;
  }

  const unixNow = getUnixTimestamp();
  const { ttl, extraInfo } = decodedToken;

  const timestamp: number = extraInfo.timestamp;

  if (!timestamp) {
    return false;
  }

  const expiresAt = timestamp + ttl;

  const isExpired = unixNow > expiresAt;

  return isExpired;
};
