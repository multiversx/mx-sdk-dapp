import { Transaction } from '@multiversx/erdjs';
import { getScamAddressData } from 'apiCalls/getScamAddressData';
import { useGetAccountInfo } from 'hooks/account/useGetAccountInfo';
import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { useSignMultipleTransactions } from 'hooks/transactions/useSignMultipleTransactions';

import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { egldLabelSelector } from 'reduxStore/selectors';
import {
  moveTransactionsToSignedState,
  setSignTransactionsError
} from 'reduxStore/slices';
import {
  ActiveLedgerTransactionType,
  LoginMethodsEnum,
  MultiSignTransactionType,
  TransactionBatchStatusesEnum
} from 'types';
import { getIsProviderEqualTo } from 'utils/account/getIsProviderEqualTo';
import { safeRedirect } from 'utils/redirect';
import { parseTransactionAfterSigning } from 'utils/transactions/parseTransactionAfterSigning';
import { getShouldMoveTransactionsToSignedState } from './helpers/getShouldMoveTransactionsToSignedState';
import { useClearTransactionsToSignWithWarning } from './helpers/useClearTransactionsToSignWithWarning';
import { useSignTransactionsCommonData } from './useSignTransactionsCommonData';

export interface UseSignTransactionsWithDevicePropsType {
  onCancel: () => void;
  verifyReceiverScam?: boolean;
}

type DeviceSignedTransactions = Record<number, Transaction>;

export interface UseSignTransactionsWithDeviceReturnType {
  allTransactions: MultiSignTransactionType[];
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
  const {
    transactionsToSign,
    hasTransactions
  } = useSignTransactionsCommonData();

  const egldLabel = useSelector(egldLabelSelector);
  const {
    account: { address }
  } = useGetAccountInfo();
  const { provider } = useGetAccountProvider();
  const dispatch = useDispatch();
  const clearTransactionsToSignWithWarning = useClearTransactionsToSignWithWarning();

  const {
    transactions,
    sessionId,
    callbackRoute,
    customTransactionInformation
  } = transactionsToSign || {};

  function handleTransactionSignError(errorMessage: string) {
    dispatch(setSignTransactionsError(errorMessage));
  }

  const locationIncludesCallbackRoute =
    callbackRoute != null && window.location.pathname.includes(callbackRoute);

  function handleTransactionsSignSuccess(newSignedTransactions: Transaction[]) {
    const shouldMoveTransactionsToSignedState = getShouldMoveTransactionsToSignedState(
      newSignedTransactions
    );

    if (!shouldMoveTransactionsToSignedState) {
      return;
    }

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
        !locationIncludesCallbackRoute
      ) {
        safeRedirect(callbackRoute);
      }
    }
  }

  function handleCancel() {
    onCancel();
    clearTransactionsToSignWithWarning(sessionId);
  }

  async function handleSignTransaction(transaction: Transaction) {
    return await provider.signTransaction(transaction);
  }

  const signMultipleTxReturnValues = useSignMultipleTransactions({
    address,
    egldLabel,
    transactionsToSign: hasTransactions ? transactions : [],
    onGetScamAddressData: verifyReceiverScam ? getScamAddressData : null,
    isLedger: getIsProviderEqualTo(LoginMethodsEnum.ledger),
    onCancel: handleCancel,
    onSignTransaction: handleSignTransaction,
    onTransactionsSignError: handleTransactionSignError,
    onTransactionsSignSuccess: handleTransactionsSignSuccess
  });
  return { ...signMultipleTxReturnValues, callbackRoute };
}
