import { Transaction } from '@multiversx/sdk-core';
import GenericGuardianProvider from '@multiversx/sdk-guardians-provider/out/genericGuardianProvider';
import { WalletProvider } from '@multiversx/sdk-web-wallet-provider/out';
import { ITransaction } from '@multiversx/sdk-web-wallet-provider/out/interface';
import { getScamAddressData } from 'apiCalls/getScamAddressData';
import { WALLET_SIGN_SESSION } from 'constants/index';
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
import { builtCallbackUrl } from 'utils';
import { getIsProviderEqualTo } from 'utils/account/getIsProviderEqualTo';
import { safeRedirect } from 'utils/redirect';
import { parseTransactionAfterSigning } from 'utils/transactions/parseTransactionAfterSigning';
import { getShouldMoveTransactionsToSignedState } from './helpers/getShouldMoveTransactionsToSignedState';
import { useClearTransactionsToSignWithWarning } from './helpers/useClearTransactionsToSignWithWarning';
import { useSignTransactionsCommonData } from './useSignTransactionsCommonData';

class LedgerGuardianProvider extends WalletProvider {
  /**
   * Packs an array of {$link Transaction} and redirects to the correct transaction sigining hook
   *
   * @param transactions
   * @param options
   */
  async guardTransactions(
    transactions: ITransaction[],
    options?: { callbackUrl?: string }
  ): Promise<void> {
    const jsonToSend: any = {};
    transactions.map((tx) => {
      const plainTx = WalletProvider.prepareWalletTransaction(tx);
      for (const txProp in plainTx) {
        if (
          plainTx.hasOwnProperty(txProp) &&
          !jsonToSend.hasOwnProperty(txProp)
        ) {
          jsonToSend[txProp] = [];
        }

        jsonToSend[txProp].push(plainTx[txProp]);
      }
    });

    const redirectUrl = this['buildWalletUrl']({
      endpoint: '',
      callbackUrl: options?.callbackUrl,
      params: jsonToSend
    });

    window.location.href = redirectUrl;
  }
}

export interface UseSignTransactionsWithDevicePropsType {
  onCancel: () => void;
  verifyReceiverScam?: boolean;
  guardianProvider?: GenericGuardianProvider;
}

type DeviceSignedTransactions = Record<number, Transaction>;

export interface UseSignTransactionsWithDeviceReturnType {
  allTransactions: MultiSignTransactionType[];
  onSignTransaction: () => void;
  onNext: () => void;
  onPrev: () => void;
  onAbort: () => void;
  guardianProvider?: GenericGuardianProvider;
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
  const { onCancel, verifyReceiverScam = true } = props;
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

    const urlParams = { [WALLET_SIGN_SESSION]: String(sessionId) };
    const callbackUrl = window?.location
      ? `${window.location.origin}${callbackRoute}`
      : `${callbackRoute}`;
    const buildedCallbackUrl = builtCallbackUrl({ callbackUrl, urlParams });

    const guardianProvider = new LedgerGuardianProvider(
      'http://localhost:3000'
    );

    guardianProvider.guardTransactions(newSignedTransactions, {
      callbackUrl: encodeURIComponent(buildedCallbackUrl)
    });

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
    guardianProvider: props.guardianProvider,
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
