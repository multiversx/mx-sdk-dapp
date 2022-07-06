import { addNewCustomToast, deleteCustomToast } from '../../utils';
import { CustomToast } from '../../UI';
import React, { useEffect, useMemo } from 'react';
import { CustomToastType } from '../../types/toasts';
import { useSelector } from '../../reduxStore/DappProviderContext';
import { customToastsSelector } from '../../reduxStore/selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faTimes, faWarning } from '@fortawesome/free-solid-svg-icons';
import globalStyles from 'assets/sass/main.scss';
import classNames from 'classnames';

const ERROR_TOAST_ID = 'sign-transactions-modals-error-toast-id';

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
  duration = 5000,
  onDelete,
  type = 'info'
}) => {
  const customToasts = useSelector(customToastsSelector);

  const errorToast = useMemo(
    () =>
      customToasts.find(
        (customToast: CustomToastType) => customToast.toastId === ERROR_TOAST_ID
      ),
    [customToasts]
  );

  const showErrorToast = () => {
    addNewCustomToast({
      toastId: ERROR_TOAST_ID,
      message,
      type: 'custom'
    });
  };

  const handleDelete = () => {
    if (Boolean(errorToast)) {
      deleteCustomToast(ERROR_TOAST_ID);
      onDelete?.();
    } else {
      deleteCustomToast(ERROR_TOAST_ID);
    }
  };

  useEffect(() => {
    if (show) {
      showErrorToast();
    }
  }, [show]);

  const MessageComponent = useMemo(() => {
    switch (type) {
      case 'info':
        return (
          <div className={classNames(globalStyles.icon, globalStyles.success)}>
            <FontAwesomeIcon icon={faInfo} />
            {message}
          </div>
        );
      case 'warning':
        return (
          <div className={classNames(globalStyles.icon, globalStyles.warning)}>
            <FontAwesomeIcon icon={faWarning} />
            {message}
          </div>
        );
      case 'error':
        return (
          <div className={classNames(globalStyles.icon, globalStyles.danger)}>
            <FontAwesomeIcon icon={faTimes} />
            {message}
          </div>
        );
      default:
        return null;
    }
  }, [type]);

  return (
    show &&
    errorToast && (
      <CustomToast
        {...errorToast}
        duration={duration}
        messageComponent={MessageComponent}
        onDelete={handleDelete}
      />
    )
  );
};
