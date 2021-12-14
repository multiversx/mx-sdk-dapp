import * as React from "react";
import { useContext as useDappContext } from "@elrondnetwork/dapp";
import {
  TransactionOptions,
  TransactionVersion,
  WalletProvider,
} from "@elrondnetwork/erdjs";
import qs from "qs";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { providerTypes, transactionStatuses } from "helpers/constants";
import { updateSignStatus } from "redux/slices/transactionsSlice";
import { dappInitRoute, walletSignSession } from "./constants";

export default function useSearchTransactions() {
  const { search } = useLocation();
  const { network } = useDappContext();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (search) {
      const searchData = qs.parse(search.replace("?", ""));

      if (searchData && walletSignSession in searchData) {
        const signSessionId: number = (searchData as any)[walletSignSession];

        const signedTransactions = new WalletProvider(
          `${network.walletAddress}${dappInitRoute}`,
        ).getTransactionsFromWalletUrl();

        if (signedTransactions.length > 0) {
          dispatch(
            updateSignStatus({
              [signSessionId.toString()]: {
                status: transactionStatuses.signed,
                transactions: signedTransactions.map((tx) => {
                  // TODO: REMOVE
                  //#region REMOVE when options is available in erdjs getTransactionsFromWalletUrl
                  if (searchData.signMethod === providerTypes.ledger) {
                    tx.version = TransactionVersion.withTxHashSignVersion();
                    tx.options = TransactionOptions.withTxHashSignOptions();
                  }
                  //#endregion
                  return tx.toPlainObject();
                }),
              },
            }),
          );
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
}
