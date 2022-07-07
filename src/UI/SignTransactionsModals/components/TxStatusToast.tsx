import { TransactionStatusToast } from '../../../components/TransactionStatusToast/TransactionStatusToast';
import React from 'react';

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
        show={Boolean(signError)}
        message={signError}
        type={'error'}
        onDelete={onDelete}
      />
    );
  } else if (canceledTransactionsMessage) {
    return (
      <TransactionStatusToast
        show={Boolean(canceledTransactionsMessage)}
        message={canceledTransactionsMessage}
        type={'warning'}
        onDelete={onDelete}
      />
    );
  }

  return null;
};
