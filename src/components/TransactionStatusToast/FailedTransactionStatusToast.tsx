import { CustomToast } from 'UI/TransactionsToastList/components/CustomToast';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import { failTransactionToastSelector } from 'reduxStore/selectors';
import styles from './transaction-status-toast.scss';
import { StatusMessageComponent } from './StatusMessageComponent';
import { StatusIconType } from './types';
import {
  addFailTransactionToast,
  removeFailTransactionToast
} from 'reduxStore/slices';
import classNames from 'classnames';
import { WithClassname } from '../../UI/types';

type ErrorToastProps = {
  type?: StatusIconType;
  message: string;
  duration?: number;
  onDelete?: () => void;
} & WithClassname;

export const FailedTransactionStatusToast: React.FC<ErrorToastProps> = ({
  message,
  duration = 20000,
  onDelete,
  type = StatusIconType.WARNING,
  className = 'dapp-failed-transaction-status-toast'
}) => {
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

  return (
    failToast && (
      <CustomToast
        {...failToast}
        duration={duration}
        messageComponent={
          <StatusMessageComponent type={type} message={message} />
        }
        onDelete={handleDelete}
        className={classNames(styles.transactionsStatusToast, className)}
      />
    )
  );
};
