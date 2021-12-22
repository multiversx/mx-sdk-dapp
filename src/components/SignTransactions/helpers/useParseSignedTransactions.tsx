import React from 'react';
import { WalletProvider } from '@elrondnetwork/erdjs';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { networkSelector } from 'redux/selectors';
import { updateSignedTransaction } from 'redux/slices';
import { TransactionBatchStatusesEnum } from 'types/enums';
import { dappInitRoute, walletSignSession } from './constants';
import { parseTransactionAfterSigning } from './parseTransactionAfterSigning';

export default function useParseSignedTransactions() {
  const { search } = useLocation();
  const network = useSelector(networkSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (search != null) {
      const searchData = qs.parse(search.replace('?', ''));

      if (searchData && walletSignSession in searchData) {
        const signSessionId: number = (searchData as any)[walletSignSession];

        const signedTransactions = new WalletProvider(
          `${network.walletAddress}${dappInitRoute}`
        ).getTransactionsFromWalletUrl();
        if (signedTransactions.length > 0) {
          dispatch(
            updateSignedTransaction({
              [signSessionId.toString()]: {
                status: TransactionBatchStatusesEnum.signed,
                transactions: signedTransactions.map((tx) =>
                  parseTransactionAfterSigning(tx)
                )
              }
            })
          );
        }
      }
    }
  }, [search]);
}
