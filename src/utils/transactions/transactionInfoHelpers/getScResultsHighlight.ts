import { getWindowLocation } from 'utils/window/getWindowLocation';

export const getScResultsHighlight = (resultHash: string) => {
  const { hash } = getWindowLocation();
  const formattedHash = hash
    .substring(0, hash.indexOf('/') > 0 ? hash.indexOf('/') : hash.length)
    .replace('#', '');
  const highlight = formattedHash === resultHash;
  return highlight;
};
