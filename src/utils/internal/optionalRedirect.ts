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

  if (shouldRedirect && callbackRoute != null) {
    setTimeout(() => {
      if (!window.location.pathname.includes(callbackRoute)) {
        if (typeof onLoginRedirect === 'function') {
          onLoginRedirect(callbackRoute, options);
        } else {
          safeRedirect(callbackRoute);
        }
      }
    }, 200);
  }
}
