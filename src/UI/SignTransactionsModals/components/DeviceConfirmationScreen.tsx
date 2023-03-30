import React from 'react';
import {
  useGetAccountProvider,
  useGetSignTransactionsError,
  useSignTransactionsCommonData
} from 'hooks';
import { SignPropsType } from 'UI/SignTransactionsModals/types/signTransactionsModals.types';
import { ExtraConfirmationScreenPropsType } from './confirmationScreen.types';
import {
  TransactionStatusToast,
  TransactionStatusToastType
} from './TransactionStatusToast';

export const DeviceConfirmationScreen = ({
  Screen,
  verifyReceiverScam,
  className
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

  const handleClose = () => {
    onAbort(transactionsToSign?.sessionId);
  };

  const signError = error || signTransactionsError;

  const signProps: SignPropsType = {
    handleClose,
    error: signError,
    sessionId: transactionsToSign?.sessionId,
    transactions: transactionsToSign?.transactions ?? [],
    providerType,
    callbackRoute:
      transactionsToSign?.callbackRoute || window?.location.pathname,
    className,
    verifyReceiverScam
  };

  const transactionStatusToastProps: TransactionStatusToastType = {
    signError,
    canceledTransactionsMessage,
    onDelete: handleClose
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
