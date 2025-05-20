import { getWindowLocation } from 'utils/window/getWindowLocation';

export const getDefaultNativeAuthConfig = (
  apiAddress = 'https://api.multiversx.com'
) => {
  return {
    origin: getWindowLocation().origin,
    apiAddress,
    expirySeconds: 60 * 60 * 24, // one day
    tokenExpirationToastWarningSeconds: 5 * 60 // five minutes
  };
};
