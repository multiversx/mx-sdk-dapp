import { isWindowAvailable } from './isWindowAvailable';

type GetWindowLocationType = {
  pathname: string;
  hash: string;
  origin: string;
  href: string;
  search: string;
};

export const getWindowLocation = (): GetWindowLocationType => {
  let isAvailable: boolean;

  try {
    isAvailable = isWindowAvailable();
  } catch (_err) {
    isAvailable = false;
  }

  if (!isAvailable) {
    return {
      pathname: '',
      hash: '',
      origin: '',
      href: '',
      search: ''
    };
  }

  const {
    location: { pathname, hash, origin, href, search }
  } = window;

  return {
    pathname,
    hash,
    origin,
    href,
    search
  };
};
