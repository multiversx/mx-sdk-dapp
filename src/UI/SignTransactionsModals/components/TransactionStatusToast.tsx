// @ts-ignore
import React, { useEffect, useMemo } from 'react';

// @ts-ignore
import { FailedTransactionStatusToast } from 'components/TransactionStatusToast/FailedTransactionStatusToast';
import { StatusIconType } from 'components/TransactionStatusToast/transactionStatusToast.types';
import { DEFAULT_TRANSACTION_STATUS_MESSAGE } from 'constants/index';

import { WithClassnameType } from '../../types';
import { useDispatch } from 'reduxStore/DappProviderContext';

import {
  // @ts-ignore
  addFailTransactionToast
} from 'reduxStore/slices';
// import { useSelector } from 'react-redux';
// import { failTransactionToastSelector } from 'reduxStore/selectors';

// TODO: Rename to "TransactionStatusToastPropsType" when dapp-core@3.0.0
export interface TransactionStatusToastType extends WithClassnameType {
  signError: string | null;
  canceledTransactionsMessage: string | null;
  onDelete: () => void;
}

export const TransactionStatusToast = ({
  signError,
  canceledTransactionsMessage,
  // onDelete,
  // @ts-ignore
  className
}: TransactionStatusToastType) => {
  const dispatch = useDispatch();

  // @ts-ignore
  const message = useMemo(() => {
    return (
      signError ||
      canceledTransactionsMessage ||
      DEFAULT_TRANSACTION_STATUS_MESSAGE
    );
  }, [signError, canceledTransactionsMessage]);

  // @ts-ignore
  const type = useMemo(() => {
    if (signError) {
      return StatusIconType.ERROR;
    } else if (canceledTransactionsMessage) {
      return StatusIconType.WARNING;
    }

    return StatusIconType.INFO;
  }, [signError, canceledTransactionsMessage]);

  useEffect(() => {
    dispatch(
      addFailTransactionToast({
        type,
        message,
        duration: 20000,
        toastId: 'failed-status-toast'
      })
    );
  }, [message, type]);

  return null;

  // return (
  //   <FailedTransactionStatusToast
  //     message={message}
  //     type={type}
  //     onDelete={handleDelete}
  //     className={className}
  //   />
  // );
};
