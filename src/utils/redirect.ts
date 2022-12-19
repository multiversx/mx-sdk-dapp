let preventRedirect = false;

export const preventRedirects = (shouldPreventRedirect = true) => {
  preventRedirect = shouldPreventRedirect;
};

export const safeRedirect = (url: string, timeout = 0) => {
  if (!preventRedirect) {
    setTimeout(() => {
      console.log(11);

      window.location.href = url;
      window.location.assign(url);
    }, timeout);
  }
};
