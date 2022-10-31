import { safeRedirect } from '../redirect';

const DEFAULT_TIMEOUT = 200;

export function optionalRedirect(
  callbackUrl?: string,
  onLoginRedirect?: (callbackRoute: string) => void
) {
  const shouldRedirect = Boolean(callbackUrl);

  const hasOnLoginRedirect = typeof onLoginRedirect === 'function';

  const timeout = hasOnLoginRedirect ? 0 : DEFAULT_TIMEOUT;

  if (shouldRedirect && callbackUrl != null) {
    setTimeout(() => {
      // if onLoginRedirect is defined, it has priority over safeRedirect
      if (hasOnLoginRedirect) {
        return onLoginRedirect(callbackUrl);
      }
      if (!window.location.pathname.includes(callbackUrl)) {
        safeRedirect(callbackUrl);
      }
    }, timeout);
  }
}
