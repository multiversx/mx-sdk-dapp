import { getWindowLocation } from 'utils/window';

export const getWebviewToken = () => {
  const { search } = getWindowLocation();
  const urlSearchParams = new URLSearchParams(search) as any;
  const searchParams = Object.fromEntries(urlSearchParams);

  return searchParams?.accessToken;
};
