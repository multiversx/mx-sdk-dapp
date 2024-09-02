import { Transaction } from '@multiversx/sdk-core';
import { getScamAddressData } from 'apiCalls/utils/getScamAddressData';

import { useGetAccountInfo } from 'hooks/account/useGetAccountInfo';
import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { useSignMultipleTransactions } from 'hooks/transactions/useSignMultipleTransactions';

import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { egldLabelSelector, walletAddressSelector } from 'reduxStore/selectors';
import {
  moveTransactionsToSignedState,
  setSignTransactionsError
} from 'reduxStore/slices';
import {
  ActiveLedgerTransactionType,
  DeviceSignedTransactions,
  LoginMethodsEnum,
  MultiSignTransactionType,
  Nullable,
  TransactionBatchStatusesEnum
} from 'types';
import { getIsProviderEqualTo } from 'utils/account/getIsProviderEqualTo';
import { safeRedirect } from 'utils/redirect';
import { parseTransactionAfterSigning } from 'utils/transactions/parseTransactionAfterSigning';
import { getWindowLocation } from 'utils/window/getWindowLocation';
import { checkNeedsGuardianSigning, useGetLedgerProvider } from './helpers';
import { getShouldMoveTransactionsToSignedState } from './helpers/getShouldMoveTransactionsToSignedState';
import { useClearTransactionsToSignWithWarning } from './helpers/useClearTransactionsToSignWithWarning';
import { useSignTransactionsCommonData } from './useSignTransactionsCommonData';

export interface UseSignTransactionsWithDevicePropsType {
  onCancel: () => void;
  verifyReceiverScam?: boolean;
  hasGuardianScreen?: boolean;
}

export interface UseSignTransactionsWithDeviceReturnType {
  allTransactions: MultiSignTransactionType[];
  onSignTransaction: () => Promise<void>;
  onNext: () => void;
  onPrev: () => void;
  onAbort: () => void;
  waitingForDevice: boolean;
  isLastTransaction: boolean;
  currentStep: number;
  signedTransactions?: DeviceSignedTransactions;
  setSignedTransactions?: React.Dispatch<
    React.SetStateAction<DeviceSignedTransactions | undefined>
  >;
  currentTransaction: ActiveLedgerTransactionType | null;
  callbackRoute?: string;
}

export function useSignTransactionsWithDevice(
  props: UseSignTransactionsWithDevicePropsType
): UseSignTransactionsWithDeviceReturnType {
  const { onCancel, verifyReceiverScam = true, hasGuardianScreen } = props;
  const { transactionsToSign, hasTransactions } =
    useSignTransactionsCommonData();
  const walletAddress = useSelector(walletAddressSelector);
  const getLedgerProvider = useGetLedgerProvider();

  const egldLabel = useSelector(egldLabelSelector);
  const { account } = useGetAccountInfo();
  const { address, isGuarded, activeGuardianAddress } = account;
  const { provider, providerType } = useGetAccountProvider();
  const dispatch = useDispatch();
  const clearTransactionsToSignWithWarning =
    useClearTransactionsToSignWithWarning();

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

  const { pathname } = getWindowLocation();
  const locationIncludesCallbackRoute =
    callbackRoute != null && pathname.includes(callbackRoute);

  const allowGuardian = !customTransactionInformation?.skipGuardian;

  async function handleTransactionsSignSuccess(
    newSignedTransactions: Transaction[]
  ) {
    const shouldMoveTransactionsToSignedState =
      getShouldMoveTransactionsToSignedState(newSignedTransactions);

    if (!shouldMoveTransactionsToSignedState) {
      return;
    }

    const { needs2FaSigning, sendTransactionsToGuardian } =
      checkNeedsGuardianSigning({
        transactions: newSignedTransactions,
        sessionId,
        callbackRoute,
        isGuarded: isGuarded && allowGuardian,
        walletAddress
      });

    if (needs2FaSigning) {
      return sendTransactionsToGuardian();
    }

    if (!sessionId) {
      return;
    }

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
      safeRedirect({ url: callbackRoute });
    }
  }

  function handleCancel() {
    onCancel();
    clearTransactionsToSignWithWarning(sessionId);
  }

  async function handleSignTransaction(
    transaction: Nullable<Transaction>
  ): Promise<Nullable<Transaction | undefined>> {
    const connectedProvider =
      providerType !== LoginMethodsEnum.ledger
        ? provider
        : await getLedgerProvider();

    if (!transaction) {
      return null;
    }
    return await connectedProvider.signTransaction(transaction);
  }

  const signMultipleTxReturnValues = useSignMultipleTransactions({
    address,
    egldLabel,
    activeGuardianAddress:
      isGuarded && allowGuardian ? activeGuardianAddress : undefined,
    transactionsToSign: hasTransactions ? transactions : [],
    onGetScamAddressData: verifyReceiverScam ? getScamAddressData : null,
    isLedger: getIsProviderEqualTo(LoginMethodsEnum.ledger),
    hasGuardianScreen,
    onCancel: handleCancel,
    onSignTransaction: handleSignTransaction,
    onTransactionsSignError: handleTransactionSignError,
    onTransactionsSignSuccess: handleTransactionsSignSuccess
  });

  return {
    ...signMultipleTxReturnValues,
    callbackRoute,
    waitingForDevice: signMultipleTxReturnValues.waitingForDevice
  };
}
