import React from 'react';
import { TxStatusToast, TxStatusToastProps } from './TxStatusToast';
import { SignPropsType } from 'UI/SignTransactionsModals/types/sign-transactions-modals';
import {
  useGetAccountProvider,
  useGetSignTransactionsError,
  useSignTransactions
} from 'hooks';

type ExtraConfirmationScreenProps = {
  Screen?: (signProps: SignPropsType) => JSX.Element;
  verifyReceiverScam?: boolean;
  className?: string;
};

export const ConfirmationScreen: React.FC<ExtraConfirmationScreenProps> = ({
  Screen,
  verifyReceiverScam,
  className
}) => {
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
    transactions: transactions!,
    providerType,
    callbackRoute,
    className,
    verifyReceiverScam
  };

  const transactionStatusToastType: TxStatusToastProps = {
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
    <TxStatusToast {...transactionStatusToastType} />
  ) : (
    <Screen {...signProps} />
  );
};
