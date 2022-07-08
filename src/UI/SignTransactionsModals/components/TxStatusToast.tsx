import { TransactionStatusToast } from 'components/TransactionStatusToast/TransactionStatusToast';
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
      <TransactionStatusToast
        message={signError}
        type={StatusIconType.ERROR}
        onDelete={onDelete}
      />
    );
  } else if (canceledTransactionsMessage) {
    return (
      <TransactionStatusToast
        message={canceledTransactionsMessage}
        type={StatusIconType.WARNING}
        onDelete={onDelete}
      />
    );
  }

  return null;
};
