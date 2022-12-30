import { NativeAuthConfigType } from 'types';

const defaultNativeAuthConfig = {
  hostname: typeof window !== 'undefined' ? window.location.hostname : '',
  apiAddress: 'https://api.elrond.com',
  expirySeconds: 60 * 60 * 24, // one day
  tokenExpierationToastWarningSeconds: 5 * 60 // five minutes
};

export const getNativeAuthConfig = (config?: NativeAuthConfigType | true) => {
  if (config === true) {
    return defaultNativeAuthConfig;
  }

  const nativeAuthConfig = {
    hostname: config?.hostname ?? defaultNativeAuthConfig.hostname,
    expirySeconds:
      config?.expirySeconds ?? defaultNativeAuthConfig.expirySeconds,
    apiAddress: config?.apiAddress ?? defaultNativeAuthConfig.apiAddress,
    tokenExpierationToastWarningSeconds:
      config?.tokenExpierationToastWarningSeconds ??
      defaultNativeAuthConfig.tokenExpierationToastWarningSeconds
  };

  return nativeAuthConfig;
};
