import { SDK_DAPP_VERSION, version } from 'constants/index';

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

export interface ReplyUrlType {
  callbackUrl: string;
  urlParams?: { [key: string]: string };
}

export function builtCallbackUrl({
  callbackUrl,
  urlParams = {}
}: ReplyUrlType) {
  let url = callbackUrl;

  if (Object.entries(urlParams).length > 0) {
    try {
      const { search, origin, pathname, hash } = new URL(callbackUrl);
      const urlParamsWithVersion = {
        ...urlParams,
        [SDK_DAPP_VERSION]: version
      };
      const { nextUrlParams } = buildUrlParams(search, urlParamsWithVersion);
      url = `${origin}${pathname}?${nextUrlParams}${hash}`;
    } catch (err) {
      console.error('Unable to construct URL from: ', callbackUrl, err);
      return url;
    }
  }

  return url;
}
