export function optionalRedirect(
  callbackUrl?: string,
  shouldRedirect?: boolean
) {
  if (shouldRedirect && callbackUrl != null) {
    setTimeout(() => {
      if (!window.location.pathname.includes(callbackUrl)) {
        window.location.href = callbackUrl;
      }
    }, 200);
  }
}
