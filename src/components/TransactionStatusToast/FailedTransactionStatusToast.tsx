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

type ErrorToastProps = {
  type?: StatusIconType;
  message: string;
  duration?: number;
  onDelete?: () => void;
};

export const FailedTransactionStatusToast: React.FC<ErrorToastProps> = ({
  message,
  duration = 30000,
  onDelete,
  type = StatusIconType.WARNING
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
        duration: 20000
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
        className={styles.transactionsStatusToast}
      />
    )
  );
};
