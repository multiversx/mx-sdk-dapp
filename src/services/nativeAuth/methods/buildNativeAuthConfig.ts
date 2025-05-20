import { NativeAuthConfigType } from '../nativeAuth.types';
import { getDefaultNativeAuthConfig } from './getDefaultNativeAuthConfig';

export const buildNativeAuthConfig = (config?: NativeAuthConfigType) => {
  const defaultNativeAuthConfig = getDefaultNativeAuthConfig();

  return {
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
};
