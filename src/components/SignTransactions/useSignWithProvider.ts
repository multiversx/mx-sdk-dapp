import React from 'react';
import { Transaction } from '@elrondnetwork/erdjs';
import { useDispatch, useSelector } from 'redux/DappProvider';
import { providerSelector, transactionsToSignSelector } from 'redux/selectors';
import { updateSignedTransaction } from 'redux/slices/transactionsSlice';
import { TransactionBatchStatusesEnum } from 'types/enums';
import { HandleCloseType } from './helpers';
import { parseTransactionAfterSigning } from './helpers/parseTransactionAfterSigning';

export interface SignModalType {
  handleClose: (props?: HandleCloseType) => void;
  setError: (value: React.SetStateAction<string>) => void;
}

export type UseSignWithProviderReturnType = [string, Transaction[] | undefined];

export type SignedTransactionType = Record<number, Transaction>;

const useSignWithProvider = ({
  handleClose,
  setError
}: SignModalType): UseSignWithProviderReturnType => {
  const dispatch = useDispatch();
  const transactionsToSign = useSelector(transactionsToSignSelector);
  // TODO: eslint warning
  const { sessionId, transactions, callbackRoute } = transactionsToSign!;

  const provider = useSelector(providerSelector);

  async function signTransactions() {
    try {
      if (transactions?.length) {
        const initialized = await provider.init();
        if (!initialized) {
          return;
        }
        provider
          .signTransactions(transactions)
          .then((signedTransactions: Transaction[]) => {
            const signingDisabled =
              !signedTransactions ||
              (signedTransactions &&
                Object.keys(signedTransactions).length !==
                  transactions?.length);

            if (!signingDisabled && signedTransactions) {
              dispatch(
                updateSignedTransaction({
                  [sessionId]: {
                    status: TransactionBatchStatusesEnum.signed,
                    transactions: Object.values(signedTransactions).map((tx) =>
                      parseTransactionAfterSigning(tx)
                    )
                  }
                })
              );
              handleClose({ updateBatchStatus: false });
              if (window.location.pathname != callbackRoute) {
                window.location.href = callbackRoute;
              }
            }
          })
          .catch(() => {
            handleClose();
          });
      }
      // TODO: if possible, provide error type. If not, any type is OK
    } catch (err) {
      setError((err as any).message);
    }
  }

  React.useEffect(() => {
    signTransactions();
  }, []);

  return [callbackRoute, transactions];
};

export default useSignWithProvider;
