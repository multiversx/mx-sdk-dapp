import { addNewCustomToast, deleteCustomToast } from 'utils';
import { CustomToast } from 'UI/TransactionsToastList/components/CustomToast';
import React, { useEffect, useMemo } from 'react';
import { CustomToastType } from 'types/toasts';
import { useSelector } from 'reduxStore/DappProviderContext';
import { customToastsSelector } from 'reduxStore/selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faTimes, faWarning } from '@fortawesome/free-solid-svg-icons';
import globalStyles from 'assets/sass/main.scss';
import classNames from 'classnames';
import { TRANSACTION_STATUS_TOAST_ID } from 'constants/index';
import styles from './transaction-status-toast.scss';

type ErrorToastProps = {
  type?: 'info' | 'error' | 'warning';
  message: string;
  duration?: number;
  show?: boolean;
  onDelete?: () => void;
};

export const TransactionStatusToast: React.FC<ErrorToastProps> = ({
  show,
  message,
  duration = 30000,
  onDelete,
  type = 'info'
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

  const showErrorToast = () => {
    addNewCustomToast({
      toastId: TRANSACTION_STATUS_TOAST_ID,
      message,
      type: 'custom'
    });
  };

  const handleDelete = () => {
    if (Boolean(errorToast)) {
      deleteCustomToast(TRANSACTION_STATUS_TOAST_ID);
      onDelete?.();
    } else {
      deleteCustomToast(TRANSACTION_STATUS_TOAST_ID);
    }
  };

  useEffect(() => {
    if (show) {
      showErrorToast();
    }
  }, [show]);

  const StatusIcon = useMemo(() => {
    switch (type) {
      case 'info':
        return (
          <div
            className={classNames(
              styles.transactionsStatusToastIcon,
              globalStyles.success
            )}
          >
            <FontAwesomeIcon icon={faInfo} className={styles.svg} size='5x' />
          </div>
        );
      case 'warning':
        return (
          <div
            className={classNames(
              styles.transactionsStatusToastIcon,
              globalStyles.warning,
              styles.warningIcon
            )}
          >
            <FontAwesomeIcon
              icon={faWarning}
              className={styles.svg}
              size='5x'
            />
          </div>
        );
      case 'error':
        return (
          <div
            className={classNames(
              styles.transactionsStatusToastIcon,
              globalStyles.danger,
              styles.errorIcon
            )}
          >
            <FontAwesomeIcon icon={faTimes} className={styles.svg} size='5x' />
          </div>
        );
      default:
        return null;
    }
  }, [type]);

  const MessageComponent = useMemo(() => {
    return (
      <div className={styles.transactionsStatusToastContent}>
        {StatusIcon}
        {message}
      </div>
    );
  }, [StatusIcon]);

  return (
    show &&
    errorToast && (
      <CustomToast
        {...errorToast}
        duration={duration}
        messageComponent={MessageComponent}
        onDelete={handleDelete}
        className={styles.transactionsStatusToast}
      />
    )
  );
};
