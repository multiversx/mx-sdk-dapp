import React from 'react';
import { WalletProvider } from '@elrondnetwork/erdjs';
import qs from 'qs';
import { dappInitRoute, walletSignSession } from 'constants/index';
import { useDispatch, useSelector } from 'redux/DappProviderContext';
import { networkSelector } from 'redux/selectors';
import { moveTransactionsToSignedState } from 'redux/slices';
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

      if (searchData && walletSignSession in searchData) {
        const sessionId = String((searchData as any)[walletSignSession]);
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
