import { getWindowLocation } from 'utils/window/getWindowLocation';

export const getWebviewPlatform = () => {
  const { search } = getWindowLocation();
  const urlSearchParams = new URLSearchParams(search);
  const searchParams = Object.fromEntries(urlSearchParams);

  return searchParams?.platform;
};
