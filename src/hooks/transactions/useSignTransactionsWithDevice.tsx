import { Transaction } from '@multiversx/sdk-core';
import { getScamAddressData } from 'apiCalls/getScamAddressData';
import { useGetAccountInfo } from 'hooks/account/useGetAccountInfo';
import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { useSignMultipleTransactions } from 'hooks/transactions/useSignMultipleTransactions';

import { useGetNetworkConfig } from 'hooks/useGetNetworkConfig';
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
  /**
   * if transactions are already signed by guardian,
   * setting `isGuarded` to `false` allows skipping the signing step
   */
  isGuarded?: boolean;
}

type DeviceSignedTransactions = Record<number, Transaction>;

export interface UseSignTransactionsWithDeviceReturnType {
  allTransactions: MultiSignTransactionType[];
  onSignTransaction: () => void;
  onNext: () => void;
  onPrev: () => void;
  onAbort: () => void;
  onSetCode: (code: string) => void;
  waitingForDevice: boolean;
  isLastTransaction: boolean;
  currentStep: number;
  signedTransactions?: DeviceSignedTransactions;
  currentTransaction: ActiveLedgerTransactionType | null;
  codeError?: string;

  callbackRoute?: string;
}

export function useSignTransactionsWithDevice(
  props: UseSignTransactionsWithDevicePropsType
): UseSignTransactionsWithDeviceReturnType {
  const { onCancel, verifyReceiverScam = true } = props;
  const { transactionsToSign, hasTransactions } =
    useSignTransactionsCommonData();

  const egldLabel = useSelector(egldLabelSelector);
  const { account } = useGetAccountInfo();
  const { address } = account;
  const { network } = useGetNetworkConfig();
  const { provider } = useGetAccountProvider();
  const dispatch = useDispatch();
  const clearTransactionsToSignWithWarning =
    useClearTransactionsToSignWithWarning();
  const isGuarded = props.isGuarded ?? account.isGuarded;

  const {
    transactions,
    sessionId,
    callbackRoute,
    customTransactionInformation
  } = transactionsToSign || {};

  function handleTransactionSignError(errorMessage: string) {
    if (sessionId) {
      dispatch(
        moveTransactionsToSignedState({
          sessionId,
          status: TransactionBatchStatusesEnum.cancelled
        })
      );
    }
    dispatch(setSignTransactionsError(errorMessage));
  }

  const locationIncludesCallbackRoute =
    callbackRoute != null && window?.location.pathname.includes(callbackRoute);

  function handleTransactionsSignSuccess(newSignedTransactions: Transaction[]) {
    const shouldMoveTransactionsToSignedState =
      getShouldMoveTransactionsToSignedState(newSignedTransactions);

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
    isGuarded,
    apiAddress: network.apiAddress,
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
