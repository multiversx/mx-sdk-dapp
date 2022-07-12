function buildUrlParams(
  search: string,
  urlParams: {
    [key: string]: string;
  }
) {
  const urlSearchParams = new URLSearchParams(search);
  const params = Object.fromEntries(urlSearchParams as any);

  const nextUrlParams = new URLSearchParams({
    ...params,
    ...urlParams
  }).toString();

  return { nextUrlParams, params };
}

interface ReplyUrlType {
  callbackUrl: string;
  urlParams?: { [key: string]: string };
}

export function builtCallbackUrl({
  callbackUrl,
  urlParams = {}
}: ReplyUrlType) {
  let url = callbackUrl;
  if (Object.entries(urlParams).length > 0) {
    const { search, origin, pathname } = new URL(callbackUrl);
    const { nextUrlParams } = buildUrlParams(search, urlParams);
    url = `${origin}${pathname}?${nextUrlParams}`;
  }
  return url;
}
