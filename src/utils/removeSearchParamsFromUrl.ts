import qs from 'qs';
import { clearNavigationHistory } from 'utils/clearNavigationHistory';
import { isWindowAvailable } from 'utils/isWindowAvailable';
import { parseNavigationParams } from 'utils/parseNavigationParams';

interface RemoveSearchParamsFromUrlParamsType {
  removeParams: string[];
  search?: string;
}

export const removeSearchParamsFromUrl = ({
  removeParams,
  search
}: RemoveSearchParamsFromUrlParamsType) => {
  const windowSearch = isWindowAvailable() ? window?.location.search : '';
  const defaultSearch = search ?? windowSearch;

  if (!defaultSearch) {
    return {};
  }

  const searchData = qs.parse(defaultSearch.replace('?', ''));

  const preserveParams = Object.keys(searchData).filter(
    (key) => !removeParams.includes(key)
  );

  const { remainingParams } = parseNavigationParams(preserveParams, {
    search,
    removeParams
  });

  clearNavigationHistory(remainingParams);

  return remainingParams;
};
