import React, { useEffect, useMemo } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.scss';
import wrapperStyles from 'UI/TransactionsToastList/styles.scss';
import classNames from 'classnames';
import { ComponentTypeWithChildren } from '../types';

interface CustomToastType {
  onDelete: () => void;
  message?: string;
  messageComponent?: React.ReactNode;
  duration?: number;
  CustomCloseButton?: ComponentTypeWithChildren<{
    onClick?: () => void;
  }>;
  className?: string;
}

export const CustomToast = ({
  onDelete,
  message,
  messageComponent,
  duration,
  CustomCloseButton,
  className
}: CustomToastType) => {
  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (duration) {
      timeout = setTimeout(onDelete, duration);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [duration]);

  const closeButton = useMemo(() => {
    return CustomCloseButton ? (
      <CustomCloseButton onClick={onDelete} />
    ) : (
      <button type='button' className={styles.close} onClick={onDelete}>
        <FontAwesomeIcon icon={faTimes} size='xs' />
      </button>
    );
  }, [CustomCloseButton, onDelete]);

  return (
    <div
      className={classNames(
        wrapperStyles.toasts,
        wrapperStyles.toastWrapper,
        className
      )}
    >
      {closeButton}
      {messageComponent ? messageComponent : message}
    </div>
  );
};
