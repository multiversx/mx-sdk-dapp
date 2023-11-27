import { getWindowLocation } from './getWindowLocation';

export const addOriginToLocationPath = (path = '') => {
  const location = getWindowLocation();
  const isHrefUrl = path.startsWith('http') || path.startsWith('www.');

  const shouldNotChangePath =
    !location.origin || path.startsWith(location.origin) || isHrefUrl;

  if (shouldNotChangePath) {
    return path;
  }

  return `${location.origin}/${path.replace('/', '')}`;
};
