import { FailedTransactionStatusToast } from 'components/TransactionStatusToast/FailedTransactionStatusToast';
import React, { useMemo } from 'react';
import { StatusIconType } from 'components/TransactionStatusToast/types';
import { DEFAULT_TRANSACTION_STATUS_MESSAGE } from '../../../constants';
import { WithClassname } from 'UI/types/with-classname';

export type TxStatusToastProps = {
  signError: string | null;
  canceledTransactionsMessage: string | null;
  onDelete: () => void;
} & WithClassname;

export const TxStatusToast: React.FC<TxStatusToastProps> = ({
  signError,
  canceledTransactionsMessage,
  onDelete,
  className
}) => {
  const message = useMemo(() => {
    return (
      signError ||
      canceledTransactionsMessage ||
      DEFAULT_TRANSACTION_STATUS_MESSAGE
    );
  }, [signError, canceledTransactionsMessage]);

  const type = useMemo(() => {
    if (signError) {
      return StatusIconType.ERROR;
    } else if (canceledTransactionsMessage) {
      return StatusIconType.WARNING;
    }

    return StatusIconType.INFO;
  }, [signError, canceledTransactionsMessage]);

  return (
    <FailedTransactionStatusToast
      message={message}
      type={type}
      onDelete={onDelete}
      className={className}
    />
  );
};
