import { WALLET_PROVIDER_CALLBACK_PARAM } from '@multiversx/sdk-web-wallet-provider';
import { WALLET_SIGN_SESSION } from 'constants/index';
import { removeSearchParamsFromUrl } from '../removeSearchParamsFromUrl';

interface RemoveTransactionParamsFromUrlParamsType {
  transaction: any;
  search?: string;
}

export const removeTransactionParamsFromUrl = ({
  transaction,
  search
}: RemoveTransactionParamsFromUrlParamsType) => {
  return removeSearchParamsFromUrl({
    removeParams: [
      ...Object.keys(transaction),
      WALLET_PROVIDER_CALLBACK_PARAM,
      WALLET_SIGN_SESSION
    ],
    search
  });
};
