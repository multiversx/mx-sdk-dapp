import React from 'react';
import { WalletProvider } from '@elrondnetwork/erdjs-web-wallet-provider';
import qs from 'qs';
import { dappInitRoute, WALLET_SIGN_SESSION } from 'constants/index';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { networkSelector } from 'reduxStore/selectors';
import { moveTransactionsToSignedState } from 'reduxStore/slices';
import { TransactionBatchStatusesEnum } from 'types/enums';
import { parseTransactionAfterSigning } from 'utils';

export function useParseSignedTransactions(
  onAbort: (sessionId?: string) => void
) {
  const { search } = window.location;
  const network = useSelector(networkSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (search != null) {
      const searchData = qs.parse(search.replace('?', ''));

      if (searchData && WALLET_SIGN_SESSION in searchData) {
        const sessionId = String((searchData as any)[WALLET_SIGN_SESSION]);
        const signedTransactions = new WalletProvider(
          `${network.walletAddress}${dappInitRoute}`
        ).getTransactionsFromWalletUrl();

        if (searchData.status === TransactionBatchStatusesEnum.cancelled) {
          dispatch(
            moveTransactionsToSignedState({
              sessionId,
              status: TransactionBatchStatusesEnum.cancelled
            })
          );
          onAbort();
          history.pushState({}, document.title, '?');
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
          history.pushState({}, document.title, '?');
        }
      }
    }
  }, [search]);
}

export default useParseSignedTransactions;
