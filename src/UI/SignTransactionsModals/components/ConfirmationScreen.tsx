import React from 'react';
import {
  useGetAccountProvider,
  useGetSignTransactionsError,
  useSignTransactions
} from 'hooks';
import { SignPropsType } from 'UI/SignTransactionsModals/types/signTransactionsModals.types';
import { ExtraConfirmationScreenPropsType } from './confirmationScreen.types';
import {
  TransactionStatusToast,
  TransactionStatusToastType
} from './TransactionStatusToast';

export const ConfirmationScreen = ({
  Screen,
  verifyReceiverScam,
  className
}: ExtraConfirmationScreenPropsType) => {
  if (!Screen) {
    return null;
  }

  const {
    callbackRoute,
    transactions,
    error,
    sessionId,
    hasTransactions,
    onAbort,
    canceledTransactionsMessage
  } = useSignTransactions();

  const signTransactionsError = useGetSignTransactionsError();
  const { providerType } = useGetAccountProvider();

  const handleClose = () => {
    onAbort(sessionId);
  };

  const signError = error || signTransactionsError;

  const signProps: SignPropsType = {
    handleClose,
    error: signError,
    sessionId,
    transactions: transactions || [],
    providerType,
    callbackRoute,
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
