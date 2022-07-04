import { safeRedirect } from '../redirect';

export function optionalRedirect(
  callbackUrl?: string
) {
  const shouldRedirect = Boolean(callbackUrl);

  if (shouldRedirect && callbackUrl != null) {
    setTimeout(() => {
      if (!window.location.pathname.includes(callbackUrl)) {
        safeRedirect(callbackUrl);
      }
    }, 200);
  }
}
