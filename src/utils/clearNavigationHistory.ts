import { getWindowLocation } from './window';

export const clearNavigationHistory = (remainingParams: any) => {
  const newUrlParams = new URLSearchParams(remainingParams).toString();
  const pathname = getWindowLocation('pathname');
  const newSearch = newUrlParams ? `?${newUrlParams}` : '';
  const fullPath = pathname ? `${pathname}${newSearch}` : './';

  setTimeout(() => {
    window?.history.replaceState({}, document?.title, fullPath);
  });
};
