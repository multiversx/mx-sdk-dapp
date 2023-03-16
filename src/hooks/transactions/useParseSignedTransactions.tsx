import { useEffect } from 'react';
import {
  WALLET_PROVIDER_CALLBACK_PARAM,
  WalletProvider
} from '@multiversx/sdk-web-wallet-provider';
import qs from 'qs';
import { DAPP_INIT_ROUTE, WALLET_SIGN_SESSION } from 'constants/index';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { networkSelector } from 'reduxStore/selectors';
import { moveTransactionsToSignedState } from 'reduxStore/slices';
import { TransactionBatchStatusesEnum } from 'types/enums.types';
import { clearNavigationHistory } from 'utils/clearNavigationHistory';
import { parseNavigationParams } from 'utils/parseNavigationParams';
import { parseTransactionAfterSigning } from 'utils/transactions/parseTransactionAfterSigning';

export function useParseSignedTransactions(
  onAbort: (sessionId?: string) => void
) {
  const search = window?.location.search;
  const network = useSelector(networkSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (search != null) {
      const searchData = qs.parse(search.replace('?', ''));

      if (searchData && WALLET_SIGN_SESSION in searchData) {
        const sessionId = String((searchData as any)[WALLET_SIGN_SESSION]);
        const signedTransactions = new WalletProvider(
          `${network.walletAddress}${DAPP_INIT_ROUTE}`
        ).getTransactionsFromWalletUrl();

        if (searchData.status === TransactionBatchStatusesEnum.cancelled) {
          dispatch(
            moveTransactionsToSignedState({
              sessionId,
              status: TransactionBatchStatusesEnum.cancelled
            })
          );
          onAbort();
          history.pushState({}, document?.title, '?');
          return;
        }
        if (signedTransactions.length > 0) {
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

          const { params } = parseNavigationParams([], {
            removeParams: [
              ...Object.keys(transaction),
              WALLET_PROVIDER_CALLBACK_PARAM, // walletProviderStatus=transactionsSigned
              WALLET_SIGN_SESSION // signSession
            ]
          });

          clearNavigationHistory(params);
        }
      }
    }
  }, [search]);
}
