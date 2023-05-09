export const getWebviewToken = () => {
  const search = typeof window !== 'undefined' ? window?.location?.search : '';
  const urlSearchParams = new URLSearchParams(search) as any;
  const searchParams = Object.fromEntries(urlSearchParams);

  return searchParams?.accessToken;
};
