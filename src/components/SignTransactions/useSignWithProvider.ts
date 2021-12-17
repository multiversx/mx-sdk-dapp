import * as React from 'react';
import { Transaction } from '@elrondnetwork/erdjs';
import { useDispatch, useSelector } from 'react-redux';
import { providerSelector, transactionsToSignSelector } from 'redux/selectors';
import { updateSignedTransaction } from 'redux/slices/transactionsSlice';
import { TransactionBatchStatusesEnum } from 'types/enums';
import { HandleCloseType } from './helpers';

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
                    transactions: Object.values(signedTransactions).map(
                      (tx) => {
                        const transaction = tx.toPlainObject();
                        transaction.hash = tx.getHash().toString();
                        return transaction;
                      }
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
    } catch (err) {
      setError(err.message);
    }
  }

  React.useEffect(() => {
    signTransactions();
  }, []);

  return [callbackRoute, transactions];
};

export default useSignWithProvider;
