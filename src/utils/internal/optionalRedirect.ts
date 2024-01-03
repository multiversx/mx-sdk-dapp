import { DEFAULT_TIMEOUT } from 'constants/index';
import { OnLoginRedirectOptionsType, OnProviderLoginType } from '../../types';
import { safeRedirect } from '../redirect';

interface OptionalRedirectType extends Omit<OnProviderLoginType, 'token'> {
  options?: OnLoginRedirectOptionsType;
}

export function optionalRedirect({
  callbackRoute,
  onLoginRedirect,
  options
}: OptionalRedirectType) {
  const shouldRedirect = Boolean(callbackRoute);
  const hasOnLoginRedirect = typeof onLoginRedirect === 'function';

  if (shouldRedirect && callbackRoute != null) {
    // if onLoginRedirect is defined, it has priority over safeRedirect
    if (hasOnLoginRedirect) {
      return onLoginRedirect(callbackRoute, options);
    }

    safeRedirect({
      url: callbackRoute,
      timeout: DEFAULT_TIMEOUT
    });
  }
}
