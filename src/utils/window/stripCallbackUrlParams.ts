export type StripCallbackUrlParamsOptions = {
  strippedParams?: string[];
  allowedOrigins?: string[];
};

export const stripCallbackUrlParams = (
  targetURL: string,
  {
    strippedParams = ['address'],
    allowedOrigins
  }: StripCallbackUrlParamsOptions = {}
) => {
  let url: URL;

  try {
    url = new URL(targetURL);
  } catch {
    throw new Error(`Invalid callback url: ${targetURL}`);
  }

  if (allowedOrigins && !allowedOrigins.includes(url.origin)) {
    throw new Error(`Callback url origin is not allowed: ${url.origin}`);
  }

  const params = new URLSearchParams(url.search);

  strippedParams.forEach((strippedParam) => params.delete(strippedParam));

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

export const sanitizeCallbackUrl = (
  targetURL: string,
  vulnerableItems: string[] = ['address']
) => stripCallbackUrlParams(targetURL, { strippedParams: vulnerableItems });
