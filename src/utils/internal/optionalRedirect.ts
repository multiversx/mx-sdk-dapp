import { safeRedirect } from '../redirect';

export function optionalRedirect(
  callbackUrl?: string,
  shouldRedirect?: boolean
) {
  if (shouldRedirect && callbackUrl != null) {
    setTimeout(() => {
      if (!window.location.pathname.includes(callbackUrl)) {
        safeRedirect(callbackUrl);
      }
    }, 200);
  }
}
