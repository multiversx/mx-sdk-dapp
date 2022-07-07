import { TransactionStatusToast } from '../../../components/TransactionStatusToast/TransactionStatusToast';
import React from 'react';

export type TxStatusToastProps = {
  signError: string | null;
  cancelTransactionsMessage: string | null;
  onDelete: () => void;
};

export const TxStatusToast: React.FC<TxStatusToastProps> = ({
  signError,
  cancelTransactionsMessage,
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
  } else if (cancelTransactionsMessage) {
    return (
      <TransactionStatusToast
        show={Boolean(cancelTransactionsMessage)}
        message={cancelTransactionsMessage}
        type={'warning'}
        onDelete={onDelete}
      />
    );
  }

  return null;
};
