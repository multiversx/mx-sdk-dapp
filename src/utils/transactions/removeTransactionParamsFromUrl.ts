import { WALLET_PROVIDER_CALLBACK_PARAM } from '@multiversx/sdk-web-wallet-provider';
import qs from 'qs';
import { WALLET_SIGN_SESSION } from 'constants/index';
import { clearNavigationHistory } from 'utils/clearNavigationHistory';
import { isWindowAvailable } from 'utils/isWindowAvailable';
import { parseNavigationParams } from 'utils/parseNavigationParams';

interface RemoveTransactionParamsFromUrlParamsType {
  transaction: any;
  search?: string;
}

export const removeTransactionParamsFromUrl = ({
  transaction,
  search
}: RemoveTransactionParamsFromUrlParamsType) => {
  const windowSearch = isWindowAvailable() ? window.location.search : '';
  const defaultSearch = search ?? windowSearch;
  const searchData = qs.parse(defaultSearch.replace('?', ''));
  const removeParams = [
    ...Object.keys(transaction),
    WALLET_PROVIDER_CALLBACK_PARAM,
    WALLET_SIGN_SESSION
  ];
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
