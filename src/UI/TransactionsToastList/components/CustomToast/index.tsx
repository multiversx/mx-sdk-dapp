import React, { useEffect, useMemo } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.scss';
import wrapperStyles from 'UI/TransactionsToastList/styles.scss';
import classNames from 'classnames';
import { ComponentTypeWithChildren } from '../types';
import { WithClassname } from 'types';

interface CustomToastType extends WithClassname {
  onDelete: () => void;
  message?: string;
  messageComponent?: React.ReactNode;
  duration?: number;
  CustomCloseButton?: ComponentTypeWithChildren<{
    onClick?: () => void;
  }>;
}

export const CustomToast = ({
  onDelete,
  message,
  messageComponent,
  duration,
  CustomCloseButton,
  className = 'dapp-custom-toast'
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
