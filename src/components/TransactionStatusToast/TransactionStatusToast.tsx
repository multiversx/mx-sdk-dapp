import { addNewCustomToast, deleteCustomToast } from 'utils';
import { CustomToast } from 'UI/TransactionsToastList/components/CustomToast';
import React, { useEffect, useMemo } from 'react';
import { CustomToastType } from 'types/toasts';
import { useSelector } from 'reduxStore/DappProviderContext';
import { customToastsSelector } from 'reduxStore/selectors';
import { TRANSACTION_STATUS_TOAST_ID } from 'constants/index';
import styles from './transaction-status-toast.scss';
import { StatusMessageComponent } from './StatusMessageComponent';

type ErrorToastProps = {
  type?: 'info' | 'error' | 'warning';
  message: string;
  duration?: number;
  onDelete?: () => void;
};

export const TransactionStatusToast: React.FC<ErrorToastProps> = ({
  message,
  duration = 30000,
  onDelete,
  type = 'warning'
}) => {
  const customToasts = useSelector(customToastsSelector);

  const errorToast = useMemo(
    () =>
      customToasts.find(
        (customToast: CustomToastType) =>
          customToast.toastId === TRANSACTION_STATUS_TOAST_ID
      ),
    [customToasts]
  );

  const handleDelete = () => {
    if (Boolean(errorToast)) {
      deleteCustomToast(TRANSACTION_STATUS_TOAST_ID);
      onDelete?.();
    } else {
      deleteCustomToast(TRANSACTION_STATUS_TOAST_ID);
    }
  };

  useEffect(() => {
    addNewCustomToast({
      toastId: TRANSACTION_STATUS_TOAST_ID,
      message,
      type: 'custom'
    });

    return () => handleDelete();
  }, []);

  return (
    errorToast && (
      <CustomToast
        {...errorToast}
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
