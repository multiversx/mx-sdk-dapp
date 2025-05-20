export function buildUrlParams(
  search: string,
  urlParams: {
    [key: string]: string;
  }
) {
  const urlSearchParams: any = new URLSearchParams(search);
  const params = Object.fromEntries(urlSearchParams);
  const nextUrlParams = new URLSearchParams({
    ...params,
    ...urlParams
  }).toString();
  return { nextUrlParams, params };
}
