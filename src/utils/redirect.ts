let preventRedirect = false;

export const preventRedirects = () => {
  preventRedirect = true;
};

export const safeRedirect = (url: string) => {
  if (!preventRedirect) {
    window.location.href = url;
  }
};
