import { getWindowLocation } from 'utils/window/getWindowLocation';

export const getAccessTokenFromSearchParams = () => {
  const { search } = getWindowLocation();
  const urlSearchParams = new URLSearchParams(search) as any;
  const searchParams = Object.fromEntries(urlSearchParams);

  return searchParams?.accessToken;
};
