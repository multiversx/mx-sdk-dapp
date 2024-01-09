import { NativeAuthConfigType } from 'types';
import { getWindowLocation } from 'utils/window/getWindowLocation';

const defaultNativeAuthConfig = {
  origin: getWindowLocation().origin,
  apiAddress: 'https://api.multiversx.com',
  expirySeconds: 60 * 60 * 24, // one day
  tokenExpirationToastWarningSeconds: 5 * 60 // five minutes
};

export const getNativeAuthConfig = (config?: NativeAuthConfigType | true) => {
  if (config === true) {
    return defaultNativeAuthConfig;
  }
  const nativeAuthConfig = {
    origin: config?.origin ?? defaultNativeAuthConfig.origin,
    blockHashShard: config?.blockHashShard,
    expirySeconds:
      config?.expirySeconds ?? defaultNativeAuthConfig.expirySeconds,
    apiAddress: config?.apiAddress ?? defaultNativeAuthConfig.apiAddress,
    tokenExpirationToastWarningSeconds:
      config?.tokenExpirationToastWarningSeconds ??
      defaultNativeAuthConfig.tokenExpirationToastWarningSeconds,
    extraInfo: config?.extraInfo ?? {},
    gatewayUrl: config?.gatewayUrl,
    extraRequestHeaders: config?.extraRequestHeaders ?? {}
  };
  return nativeAuthConfig;
};
