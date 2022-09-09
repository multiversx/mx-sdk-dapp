import { Transaction } from '@elrondnetwork/erdjs';
import { getScamAddressData } from 'apiCalls/getScamAddressData';
import { useGetAccountInfo } from 'hooks/account/useGetAccountInfo';
import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { useSignMultipleTransactions } from 'hooks/transactions/useSignMultipleTransactions';

import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  egldLabelSelector,
  transactionsToSignSelector
} from 'reduxStore/selectors';
import {
  clearAllTransactionsToSign,
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
import { getIsPathameEqualToCallbackRoute } from './helpers';
import { getShouldMoveTransactionsToSignedState } from './helpers/getShouldMoveTransactionsToSignedState';

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
  const transactionsToSign = useSelector(transactionsToSignSelector);
  const egldLabel = useSelector(egldLabelSelector);
  const {
    account: { address }
  } = useGetAccountInfo();
  const { provider } = useGetAccountProvider();
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

  const isPathameEqualToCallbackRoute = getIsPathameEqualToCallbackRoute(
    callbackRoute
  );

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
        !isPathameEqualToCallbackRoute
      ) {
        safeRedirect(callbackRoute);
      }
    }
  }

  function handleCancel() {
    onCancel();
    dispatch(clearAllTransactionsToSign());

    if (callbackRoute != null && !isPathameEqualToCallbackRoute) {
      console.log('IS REDIRECT', callbackRoute, window.location.pathname);
      safeRedirect(callbackRoute);
    }
  }

  async function handleSignTransaction(transaction: Transaction) {
    return await provider.signTransaction(transaction);
  }

  const signMultipleTxReturnValues = useSignMultipleTransactions({
    address,
    egldLabel,
    transactionsToSign: transactions,
    onGetScamAddressData: verifyReceiverScam ? getScamAddressData : null,
    isLedger: getIsProviderEqualTo(LoginMethodsEnum.ledger),
    onCancel: handleCancel,
    onSignTransaction: handleSignTransaction,
    onTransactionsSignError: handleTransactionSignError,
    onTransactionsSignSuccess: handleTransactionsSignSuccess
  });
  return { ...signMultipleTxReturnValues, callbackRoute };
}
