import { FailedTransactionStatusToast } from 'components/TransactionStatusToast/FailedTransactionStatusToast';
import React, { useMemo } from 'react';
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
  const message = useMemo(() => {
    if (signError) {
      return signError;
    } else if (canceledTransactionsMessage) {
      return canceledTransactionsMessage;
    }

    return 'Undefined transaction status';
  }, []);

  const type = useMemo(() => {
    if (signError) {
      return StatusIconType.ERROR;
    } else if (canceledTransactionsMessage) {
      return StatusIconType.WARNING;
    }

    return StatusIconType.INFO;
  }, []);

  return (
    <FailedTransactionStatusToast
      message={message}
      type={type}
      onDelete={onDelete}
    />
  );
};
