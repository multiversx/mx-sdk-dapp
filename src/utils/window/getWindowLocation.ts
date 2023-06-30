import { isWindowAvailable } from 'utils/isWindowAvailable';

type WindowLocationType = 'search' | 'pathname' | 'hash' | 'origin' | 'href';

export const getWindowLocation = (type: WindowLocationType): string => {
  const isAvailable = isWindowAvailable();

  if (!isAvailable) {
    return '';
  }

  const { location } = window;

  switch (type) {
    case 'pathname':
      return location.pathname as unknown as string;
    case 'hash':
      return location.hash as unknown as string;
    case 'origin':
      return location.origin as unknown as string;
    case 'href':
      return location.href as unknown as string;
    case 'search':
    default:
      return location.search as unknown as string;
  }
};
