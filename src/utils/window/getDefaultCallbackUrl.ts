import { getWindowLocation } from './index';

export const getDefaultCallbackUrl = () => {
  const { pathname, search, hash } = getWindowLocation();

  return `${pathname ?? ''}${search ?? ''}${hash ?? ''}`;
};
