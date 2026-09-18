import { decodeNativeAuthToken } from 'services/nativeAuth/helpers/decodeNativeAuthToken';
import { getTokenExpiration } from 'services/nativeAuth/methods/getTokenExpiration';

export const isAccessTokenForLogin = ({
  accessToken,
  address,
  origin
}: {
  accessToken?: string;
  address: string;
  origin?: string;
}) => {
  const decodedToken = decodeNativeAuthToken(accessToken);

  if (!decodedToken) {
    return false;
  }

  if (decodedToken.address !== address || decodedToken.origin !== origin) {
    return false;
  }

  return !getTokenExpiration(accessToken).isExpired;
};
