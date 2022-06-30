import React, { useEffect, useMemo } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.scss';
import wrapperStyles from 'UI/TransactionsToastList/styles.scss';
import classNames from 'classnames';

interface CustomToastType {
  onDelete: () => void;
  content: string | React.ReactNode;
  duration?: number;
  CustomCloseButton?: React.ComponentType<
    React.PropsWithChildren<{
      onClick?: () => void;
    }>
  >;
}

export const CustomToast = ({
  onDelete,
  content,
  duration,
  CustomCloseButton
}: CustomToastType) => {
  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (duration) {
      timeout = setTimeout(onDelete, duration);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, []);

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
      className={classNames(wrapperStyles.toasts, wrapperStyles.toastWrapper)}
    >
      {closeButton}
      {content}
    </div>
  );
};
