import { safeRedirect } from '../redirect';

export function optionalRedirect(
  callbackUrl?: string,
  onLoginRedirect?: (callbackRoute: string) => void
) {
  const shouldRedirect = Boolean(callbackUrl);

  if (shouldRedirect && callbackUrl != null) {
    setTimeout(() => {
      if (!window.location.pathname.includes(callbackUrl)) {
        if (typeof onLoginRedirect === 'function') {
          onLoginRedirect(callbackUrl);
        } else {
          safeRedirect(callbackUrl);
        }
      }
    }, 200);
  }
}
