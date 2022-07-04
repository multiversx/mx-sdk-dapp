let preventRedirect = false;

export const preventRedirects = (shouldPreventRedirect: boolean = true) => {
  preventRedirect = shouldPreventRedirect;
};

export const safeRedirect = (url: string, timeout: number = 0) => {
  if (!preventRedirect) {
    setTimeout(() => {
      window.location.href = url;
    }, timeout);
  }
};
