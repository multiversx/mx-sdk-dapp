let preventRedirect = false;

export const preventRedirects = (shouldPreventRedirect = true) => {
  preventRedirect = shouldPreventRedirect;
};

export const safeRedirect = ({
  shouldForcePageReload,
  timeout = 0,
  url
}: {
  shouldForcePageReload?: boolean;
  timeout?: number;
  url: string;
}) => {
  if (!preventRedirect) {
    setTimeout(() => {
      if (!window) {
        return;
      }

      // Navigate to callbackUrl without page refresh if we are in the same origin
      const isSameOriginRedirect = url?.startsWith('/');

      if (isSameOriginRedirect && !shouldForcePageReload) {
        return window.history.pushState('', '', url);
      }

      return window.location.assign(url);
    }, timeout);
  }
};
