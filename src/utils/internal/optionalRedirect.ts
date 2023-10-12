import { OnLoginRedirectOptionsType, OnProviderLoginType } from '../../types';
import { safeRedirect } from '../redirect';

interface OptionalRedirectType extends Omit<OnProviderLoginType, 'token'> {
  options?: OnLoginRedirectOptionsType;
}

const DEFAULT_TIMEOUT = 200;

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
