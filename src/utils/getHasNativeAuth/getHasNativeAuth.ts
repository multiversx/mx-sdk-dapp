import isObject from 'lodash/isObject';
import { safeWindow } from 'lib/sdkDappUtils';
import { OnProviderLoginType } from '../../types/login.types';

const isDevelopment = safeWindow?.location?.origin?.includes('localhost');

export const getHasNativeAuth = (
  nativeAuth: OnProviderLoginType['nativeAuth']
) => {
  const hasNativeAuth = isObject(nativeAuth);

  if (!hasNativeAuth) {
    return Boolean(nativeAuth);
  }

  const nativeAuthClone = { ...nativeAuth };
  const preventWalletConnectV2Signing = Boolean(isDevelopment);

  if (preventWalletConnectV2Signing) {
    delete nativeAuthClone.origin;
  }

  const isNativeAuthConfigured = Object.keys(nativeAuthClone).length > 0;

  return isNativeAuthConfigured;
};
