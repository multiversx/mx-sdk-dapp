import { clearNavigationHistory } from './clearNavigationHistory';

export const parseNavigationParams = (preserveParams: string[]) => {
  let params: Record<string, string> = {};

  if (window?.location?.search) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    params = Object.fromEntries(urlSearchParams as any);
  }

  const remainingParams: Record<string, string> = {};

  preserveParams.forEach((key) => {
    remainingParams[key] = params[key];
    delete params[key];
  });

  return {
    ...remainingParams,
    clearNavigationHistory: () => clearNavigationHistory(params)
  } as any;
};
