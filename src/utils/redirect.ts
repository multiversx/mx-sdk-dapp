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

      if (url.startsWith('/')) {
        return window.history.pushState('', '', url);
      }

      return window.location.assign(url);
    }, timeout);
  }
};
