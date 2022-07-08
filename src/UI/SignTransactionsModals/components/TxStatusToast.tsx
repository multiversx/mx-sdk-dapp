import { FailedTransactionStatusToast } from 'components/TransactionStatusToast/FailedTransactionStatusToast';
import React from 'react';
import { StatusIconType } from 'components/TransactionStatusToast/types';

export type TxStatusToastProps = {
  signError: string | null;
  canceledTransactionsMessage: string | null;
  onDelete: () => void;
};

export const TxStatusToast: React.FC<TxStatusToastProps> = ({
  signError,
  canceledTransactionsMessage,
  onDelete
}) => {
  if (signError) {
    return (
      <FailedTransactionStatusToast
        message={signError}
        type={StatusIconType.ERROR}
        onDelete={onDelete}
      />
    );
  } else if (canceledTransactionsMessage) {
    return (
      <FailedTransactionStatusToast
        message={canceledTransactionsMessage}
        type={StatusIconType.WARNING}
        onDelete={onDelete}
      />
    );
  }

  return null;
};
