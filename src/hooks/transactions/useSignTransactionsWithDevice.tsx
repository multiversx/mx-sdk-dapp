import { Transaction } from '@multiversx/sdk-core';
import { getEnvironmentForChainId } from 'apiCalls/configuration';
import { getScamAddressData } from 'apiCalls/getScamAddressData';
import {
  WALLET_SIGN_SESSION,
  fallbackNetworkConfigurations
} from 'constants/index';
import { useGetAccountInfo } from 'hooks/account/useGetAccountInfo';
import { useGetAccountProvider } from 'hooks/account/useGetAccountProvider';
import { useSignMultipleTransactions } from 'hooks/transactions/useSignMultipleTransactions';

import { newWalletProvider } from 'providers/utils';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { egldLabelSelector } from 'reduxStore/selectors';
import {
  moveTransactionsToSignedState,
  setSignTransactionsError
} from 'reduxStore/slices';
import {
  ActiveLedgerTransactionType,
  DeviceSignedTransactions,
  LoginMethodsEnum,
  MultiSignTransactionType,
  SignModalPropsType,
  TransactionBatchStatusesEnum
} from 'types';
import { getIsProviderEqualTo } from 'utils/account/getIsProviderEqualTo';
import { safeRedirect } from 'utils/redirect';
import { builtCallbackUrl } from 'utils/transactions/builtCallbackUrl';
import { parseTransactionAfterSigning } from 'utils/transactions/parseTransactionAfterSigning';
import { getShouldMoveTransactionsToSignedState } from './helpers/getShouldMoveTransactionsToSignedState';
import { useClearTransactionsToSignWithWarning } from './helpers/useClearTransactionsToSignWithWarning';
import { useSignTransactionsCommonData } from './useSignTransactionsCommonData';

export interface UseSignTransactionsWithDevicePropsType {
  onCancel: () => void;
  verifyReceiverScam?: boolean;
  isGuarded?: SignModalPropsType['isGuarded'];
}

export interface UseSignTransactionsWithDeviceReturnType {
  allTransactions: MultiSignTransactionType[];
  onSignTransaction: () => void;
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
  const { onCancel, verifyReceiverScam = true, isGuarded } = props;
  const { transactionsToSign, hasTransactions } =
    useSignTransactionsCommonData();

  const egldLabel = useSelector(egldLabelSelector);
  const { account } = useGetAccountInfo();
  const { address } = account;
  const { provider } = useGetAccountProvider();
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

  const locationIncludesCallbackRoute =
    callbackRoute != null && window?.location.pathname.includes(callbackRoute);

  function handleTransactionsSignSuccess(newSignedTransactions: Transaction[]) {
    const shouldMoveTransactionsToSignedState =
      getShouldMoveTransactionsToSignedState(newSignedTransactions);

    if (!shouldMoveTransactionsToSignedState) {
      return;
    }

    // TODO: add condition for not signed transactions by guardian
    if (isGuarded) {
      const chainId = newSignedTransactions[0].getChainID().valueOf();
      const environment = getEnvironmentForChainId(chainId);
      const walletAddress =
        fallbackNetworkConfigurations[environment].walletAddress;
      const walletProvider = newWalletProvider(walletAddress);
      const urlParams = { [WALLET_SIGN_SESSION]: String(sessionId) };
      const callbackUrl = window?.location
        ? `${window.location.origin}${callbackRoute}`
        : `${callbackRoute}`;
      const builtedCallbackUrl = builtCallbackUrl({ callbackUrl, urlParams });

      walletProvider.guardTransactions(newSignedTransactions, {
        callbackUrl: encodeURIComponent(builtedCallbackUrl)
      });
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
