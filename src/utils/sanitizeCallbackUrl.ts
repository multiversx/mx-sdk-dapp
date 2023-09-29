export const sanitizeCallbackUrl = (
  targetURL: string,
  vulnerableItems: string[] = ['address']
) => {
  const url = new URL(targetURL);
  const params = new URLSearchParams(url.search);

  vulnerableItems.forEach((vulnerableItem) => params.delete(vulnerableItem));

  const questionMark = Array.from(params.values()).length > 0 ? '?' : '';

  const pathname =
    url.pathname === '/' && !targetURL.endsWith('/') ? '' : url.pathname;

  if (url.protocol === 'vscode:') {
    return targetURL;
  }

  return `${url.origin}${pathname}${questionMark}${params.toString()}${
    url.hash
  }`;
};
