import React from 'react';
import {
  useGetAccount,
  useGetAccountProvider,
  useGetSignTransactionsError,
  useSignTransactionsCommonData
} from 'hooks';
import { SignPropsType } from 'UI/SignTransactionsModals/types/signTransactionsModals.types';
import { getWindowLocation } from 'utils/window/getWindowLocation';
import { ExtraConfirmationScreenPropsType } from './confirmationScreen.types';
import {
  TransactionStatusToast,
  TransactionStatusToastType
} from './TransactionStatusToast';

export const DeviceConfirmationScreen = ({
  Screen,
  GuardianScreen,
  verifyReceiverScam,
  className,
  cancelTransactionToastContainer
}: ExtraConfirmationScreenPropsType) => {
  if (!Screen) {
    return null;
  }

  const {
    transactionsToSign,
    error,
    hasTransactions,
    onAbort,
    canceledTransactionsMessage
  } = useSignTransactionsCommonData();

  const signTransactionsError = useGetSignTransactionsError();
  const { providerType } = useGetAccountProvider();
  const { isGuarded } = useGetAccount();

  const handleClose = () => {
    onAbort(transactionsToSign?.sessionId);
  };

  const signError = error || signTransactionsError;

  const signProps: SignPropsType = {
    handleClose,
    GuardianScreen,
    isGuarded,
    error: signError,
    sessionId: transactionsToSign?.sessionId,
    transactions: transactionsToSign?.transactions ?? [],
    providerType,
    callbackRoute:
      transactionsToSign?.callbackRoute || getWindowLocation().pathname,
    className,
    verifyReceiverScam
  };

  const transactionStatusToastProps: TransactionStatusToastType = {
    signError,
    canceledTransactionsMessage,
    onDelete: handleClose,
    cancelTransactionToastContainer
  };

  const shouldShowTransactionStatusToast =
    Boolean(signError) || Boolean(canceledTransactionsMessage);

  if (!shouldShowTransactionStatusToast && !hasTransactions) {
    return null;
  }

  return shouldShowTransactionStatusToast ? (
    <TransactionStatusToast {...transactionStatusToastProps} />
  ) : (
    <Screen {...signProps} />
  );
};
