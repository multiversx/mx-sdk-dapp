import { getFlagsConfig } from 'methods/initApp/helpers/getFlagsConfig';
import { decodeNativeAuthToken } from 'services/nativeAuth/helpers/decodeNativeAuthToken';
import {
  GetTokenExpirationReturnType,
  getTokenExpiration
} from 'services/nativeAuth/methods/getTokenExpiration';
import { loginExpiresAtSelector } from 'store/selectors/loginInfoSelectors';
import { tokenLoginSelector } from 'store/selectors/loginInfoSelectors';
import { StoreType } from 'store/store.types';
import { getUnixTimestamp } from 'utils/dateTime/getUnixTimestamp';

const noExpiration: GetTokenExpirationReturnType = { isExpired: false };

export const getSessionExpiration = (
  state: StoreType
): GetTokenExpirationReturnType => {
  const { enforceSessionExpiry } = getFlagsConfig();
  const nativeAuthToken = tokenLoginSelector(state)?.nativeAuthToken;

  if (nativeAuthToken) {
    const expiration = getTokenExpiration(nativeAuthToken);

    if (!enforceSessionExpiry) {
      return expiration;
    }

    const decodedToken = decodeNativeAuthToken(nativeAuthToken);

    if (!decodedToken) {
      return { isExpired: true };
    }

    if (decodedToken.extraInfo?.timestamp) {
      return expiration;
    }
  }

  if (!enforceSessionExpiry) {
    return noExpiration;
  }

  const loginExpiresAt = loginExpiresAtSelector(state);

  if (loginExpiresAt == null) {
    return noExpiration;
  }

  const expiresAt = Math.floor(loginExpiresAt / 1000);
  const secondsUntilExpires = expiresAt - getUnixTimestamp();

  return {
    isExpired: secondsUntilExpires <= 0,
    expiresAt,
    secondsUntilExpires
  };
};
