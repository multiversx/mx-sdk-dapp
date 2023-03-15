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
      window.location.href = url;
      window.location.assign(url);
    }, timeout);
  }
};
