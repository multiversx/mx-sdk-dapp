let preventRedirect = false;

export const preventRedirects = (shouldPreventRedirect = true) => {
  preventRedirect = shouldPreventRedirect;
};

export const safeRedirect = (url: string, timeout = 0) => {
  if (!preventRedirect) {
    setTimeout(() => {
      if (!window) {
        return;
      }

      // Navigate to callbackUrl without page refresh
      // if we are in the same origin
      const isSameOriginRedirect = url?.startsWith('/');

      if (isSameOriginRedirect) {
        return window.history.pushState('', '', url);
      }

      return window.location.assign(url);
    }, timeout);
  }
};
