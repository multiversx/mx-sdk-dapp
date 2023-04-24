import { clearNavigationHistory } from './clearNavigationHistory';
import { isWindowAvailable } from './isWindowAvailable';

interface ParseNavigationParamsOptionsType {
  search?: string;
  removeParams?: string[];
}

const defaultOptions: ParseNavigationParamsOptionsType = {
  search: isWindowAvailable() ? window.location.search : '',
  removeParams: []
};

/**
 * @param preserveParams allows extracting params from URL search object
 * @param options.removeParams allows removing params from URL search object
 * @returns the selected params, search object with removed params, and the `clearNavigationHistory` helper
 */
export const parseNavigationParams = (
  preserveParams: string[],
  options = defaultOptions
) => {
  let params: Record<string, string> = {};
  const defaultSearch = isWindowAvailable() ? window.location.search : '';
  const search = options.search ?? defaultSearch;

  if (search) {
    const urlSearchParams = search ? new URLSearchParams(search) : [];
    params = Object.fromEntries(urlSearchParams);
  }

  const remainingParams: Record<string, string> = {};

  preserveParams.forEach((key) => {
    remainingParams[key] = params[key];
    delete params[key];
  });

  if (options.removeParams != null) {
    Object.keys(params).forEach((entry) => {
      // param is of type a=1 or a[1]=1
      const [arrayEntry] = entry.split('[');
      if (
        options.removeParams?.includes(entry) ||
        options.removeParams?.includes(arrayEntry)
      ) {
        delete params[entry];
      }
    });
  }

  return {
    remainingParams,
    params,
    clearNavigationHistory: () => clearNavigationHistory(params)
  };
};
