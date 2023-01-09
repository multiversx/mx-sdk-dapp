import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { failTransactionToastSelector } from 'reduxStore/selectors';
import {
  addFailTransactionToast,
  removeFailTransactionToast
} from 'reduxStore/slices';
import { CustomToast } from 'UI/TransactionsToastList/components/CustomToast';
import { WithClassnameType } from '../../UI/types';
import { StatusMessageComponent } from './StatusMessageComponent';
import { StatusIconType } from './transactionStatusToast.types';

import styles from './transactionStatusToastStyles.scss';

export interface ErrorToastPropsType extends WithClassnameType {
  type?: StatusIconType;
  message: string;
  duration?: number;
  onDelete?: () => void;
}

export const FailedTransactionStatusToast = ({
  message,
  duration = 20000,
  onDelete,
  type = StatusIconType.WARNING,
  className = 'dapp-failed-transaction-status-toast'
}: ErrorToastPropsType) => {
  const dispatch = useDispatch();
  const failToast = useSelector(failTransactionToastSelector);

  const handleDelete = () => {
    dispatch(removeFailTransactionToast());

    if (Boolean(failToast)) {
      onDelete?.();
    }
  };

  useEffect(() => {
    dispatch(
      addFailTransactionToast({
        message,
        duration
      })
    );

    return () => handleDelete();
  }, []);

  if (!failToast) {
    return null;
  }

  return createPortal(
    <div className={classNames(styles.toasts, className)}>
      <CustomToast
        {...failToast}
        toastId='failed-status-toast'
        duration={duration}
        messageComponent={
          <StatusMessageComponent type={type} message={message} />
        }
        onDelete={handleDelete}
        className={classNames(styles.transactionsStatusToast, className)}
      />
    </div>,
    document?.body
  );
};
