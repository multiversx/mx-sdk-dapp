import { networkSelector } from 'store/selectors';
import { getState } from 'store/store';
import { getWindowLocation } from 'utils/window/getWindowLocation';
import { NativeAuthConfigType } from '../nativeAuth.types';

const DEFAULT_API_ADDRESS = 'https://api.multiversx.com';

const DEFAULT_EXPIRY_SECONDS = 60 * 60 * 24; // one day
const DEFAULT_TOKEN_EXPIRATION_TOAST_WARNING_SECONDS = 5 * 60; // five minutes

export const getDefaultNativeAuthConfig = (config?: NativeAuthConfigType) => {
  const network = networkSelector(getState());

  return {
    origin: config?.origin || getWindowLocation().origin,
    apiAddress: config?.apiAddress || network.apiAddress || DEFAULT_API_ADDRESS,
    expirySeconds: config?.expirySeconds || DEFAULT_EXPIRY_SECONDS,
    tokenExpirationToastWarningSeconds:
      config?.tokenExpirationToastWarningSeconds ||
      DEFAULT_TOKEN_EXPIRATION_TOAST_WARNING_SECONDS
  };
};
