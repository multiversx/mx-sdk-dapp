import { getWindowLocation } from 'utils/window/getWindowLocation';

export const getWebviewPlatform = () => {
  const { search } = getWindowLocation();
  const urlSearchParams = new URLSearchParams(search) as any;
  const searchParams = Object.fromEntries(urlSearchParams);

  return searchParams?.webviewPlatform;
};
