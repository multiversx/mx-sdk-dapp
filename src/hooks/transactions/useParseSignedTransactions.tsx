import { useEffect } from 'react';
import { WalletProvider } from '@multiversx/sdk-web-wallet-provider';
import { WALLET_PROVIDER_CALLBACK_PARAM } from '@multiversx/sdk-web-wallet-provider';
import qs from 'qs';
import {
  DAPP_INIT_ROUTE,
  TRANSACTION_CANCELLED,
  WALLET_SIGN_SESSION
} from 'constants/index';
import { useNetwork } from 'hooks/store/useNetworkStore';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { dappConfigSelector } from 'reduxStore/selectors';
import {
  moveTransactionsToSignedState,
  setSignTransactionsCancelMessage
} from 'reduxStore/slices';
import { TransactionBatchStatusesEnum } from 'types/enums.types';
import { SignedMessageQueryParamsEnum } from 'types/signedMessage.types';
import { removeSearchParamsFromUrl } from 'utils/removeSearchParamsFromUrl';
import { parseTransactionAfterSigning } from 'utils/transactions/parseTransactionAfterSigning';
import { removeTransactionParamsFromUrl } from 'utils/transactions/removeTransactionParamsFromUrl';
import { getWindowLocation } from 'utils/window/getWindowLocation';

const location = getWindowLocation();

export function useParseSignedTransactions(
  onAbort: (sessionId?: string) => void
) {
  const network = useNetwork();
  const dispatch = useDispatch();
  const { shouldFetchWalletUrlOnLoad } = useSelector(dappConfigSelector);

  const { search } = shouldFetchWalletUrlOnLoad
    ? location
    : getWindowLocation();

  useEffect(() => {
    if (search != null) {
      const searchData = qs.parse(search.replace('?', ''));

      if (searchData && WALLET_SIGN_SESSION in searchData) {
        const sessionId = String((searchData as any)[WALLET_SIGN_SESSION]);

        const signedTransactions = new WalletProvider(
          `${network.walletAddress}${DAPP_INIT_ROUTE}`
        ).getTransactionsFromWalletUrl(search);

        if (searchData.status === TransactionBatchStatusesEnum.cancelled) {
          dispatch(
            moveTransactionsToSignedState({
              sessionId,
              status: TransactionBatchStatusesEnum.cancelled
            })
          );
          onAbort();
          removeSearchParamsFromUrl({
            removeParams: [
              ...Object.keys(SignedMessageQueryParamsEnum),
              WALLET_PROVIDER_CALLBACK_PARAM,
              WALLET_SIGN_SESSION,
              'address'
            ],
            search
          });
          dispatch(setSignTransactionsCancelMessage(TRANSACTION_CANCELLED));
          return;
        }

        if (signedTransactions.length > 0) {
          // TODO: check if the transactions are same as the ones in the redux store
          dispatch(
            moveTransactionsToSignedState({
              sessionId,
              status: TransactionBatchStatusesEnum.signed,
              transactions: signedTransactions.map((tx) =>
                parseTransactionAfterSigning(tx)
              )
            })
          );

          const [transaction] = signedTransactions;
          removeTransactionParamsFromUrl({
            transaction,
            search
          });
        }
      }
    }
  }, [search]);
}
