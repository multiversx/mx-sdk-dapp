import { Transaction } from '@elrondnetwork/erdjs';
import { useDispatch } from 'react-redux';
import { useGetAccountInfo } from 'hooks/account';
import useSignMultipleTransactions from 'hooks/transactions/useSignMultipleTransactions';
import { getAccountProvider } from 'providers/accountProvider';
import { useSelector } from 'redux/DappProviderContext';
import { egldLabelSelector, transactionsToSignSelector } from 'redux/selectors';
import {
  clearAllTransactionsToSign,
  moveTransactionsToSignedState,
  setSignTransactionsError
} from 'redux/slices';
import {
  ActiveLedgerTransactionType,
  MultiSignTxType,
  TransactionBatchStatusesEnum
} from 'types';
import { parseTransactionAfterSigning, safeRedirect } from 'utils';

export interface UseSignTransactionsWithDevicePropsType {
  onCancel: () => void;
  verifyReceiverScam?: boolean;
}

type DeviceSignedTransactions = Record<number, Transaction>;

export interface UseSignTransactionsWithDeviceReturnType {
  allTransactions: MultiSignTxType[];
  onSignTransaction: () => void;
  onNext: () => void;
  onPrev: () => void;
  onAbort: () => void;
  waitingForDevice: boolean;
  isLastTransaction: boolean;
  callbackRoute?: string;
  currentStep: number;
  signedTransactions?: DeviceSignedTransactions;
  currentTransaction: ActiveLedgerTransactionType | null;
}

export function useSignTransactionsWithDevice({
  onCancel,
  verifyReceiverScam = true
}: UseSignTransactionsWithDevicePropsType): UseSignTransactionsWithDeviceReturnType {
  const transactionsToSign = useSelector(transactionsToSignSelector);
  const egldLabel = useSelector(egldLabelSelector);
  const {
    account: { address }
  } = useGetAccountInfo();
  const provider = getAccountProvider();
  const dispatch = useDispatch();

  const {
    transactions,
    sessionId,
    callbackRoute,
    customTransactionInformation
  } = transactionsToSign || {};

  function handleTransactionSignError(errorMessage: string) {
    dispatch(setSignTransactionsError(errorMessage));
  }

  function handleTransactionsSignSuccess(newSignedTransactions: Transaction[]) {
    if (sessionId) {
      dispatch(
        moveTransactionsToSignedState({
          sessionId: sessionId,
          status: TransactionBatchStatusesEnum.signed,
          transactions: newSignedTransactions.map((tx) =>
            parseTransactionAfterSigning(tx)
          )
        })
      );

      if (
        callbackRoute != null &&
        customTransactionInformation?.redirectAfterSign &&
        !window.location.pathname.includes(callbackRoute)
      ) {
        safeRedirect(callbackRoute);
      }
    }
  }

  function handleCancel() {
    onCancel();
    dispatch(clearAllTransactionsToSign());
    if (
      callbackRoute != null &&
      customTransactionInformation?.redirectAfterSign
    ) {
      safeRedirect(callbackRoute);
    }
  }

  async function handleSignTransaction(transaction: Transaction) {
    return await provider.signTransaction(transaction);
  }

  const signMultipleTxReturnValues = useSignMultipleTransactions({
    verifyReceiverScam,
    address,
    egldLabel,
    transactionsToSign: transactions,
    onCancel: handleCancel,
    onSignTransaction: handleSignTransaction,
    onTransactionsSignError: handleTransactionSignError,
    onTransactionsSignSuccess: handleTransactionsSignSuccess
  });
  return { ...signMultipleTxReturnValues, callbackRoute };
}

export default useSignTransactionsWithDevice;
