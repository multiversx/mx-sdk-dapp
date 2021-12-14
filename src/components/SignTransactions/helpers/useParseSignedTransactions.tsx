import * as React from 'react';
import {
  TransactionOptions,
  TransactionVersion,
  WalletProvider
} from '@elrondnetwork/erdjs';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { networkSelector } from 'redux/selectors';
import { updateSignStatus } from 'redux/slices';
import { loginMethodsEnum, transactionStatuses } from 'types/enums';
import { dappInitRoute, walletSignSession } from './constants';

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
            updateSignStatus({
              [signSessionId.toString()]: {
                status: transactionStatuses.signed,
                transactions: signedTransactions.map((tx) => {
                  // TODO: REMOVE
                  //#region REMOVE when options is available in erdjs getTransactionsFromWalletUrl
                  if (searchData.signMethod === loginMethodsEnum.ledger) {
                    tx.version = TransactionVersion.withTxHashSignVersion();
                    tx.options = TransactionOptions.withTxHashSignOptions();
                  }
                  //#endregion
                  return tx.toPlainObject();
                })
              }
            })
          );
        }
      }
    }
  }, [search]);
}
