import { safeRedirect } from '../redirect';

export function optionalRedirect(
  callbackUrl?: string,
  shouldRedirect?: boolean,
  onLoginRedirect?: (callbackRoute: string) => void
) {
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
