import React, { useEffect } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.scss';
import wrapperStyles from 'UI/TransactionsToastList/styles.scss';

interface CustomToastType {
  onDelete: () => void;
  message: string;
  duration?: number;
}

export const CustomToast = ({
  onDelete,
  message,
  duration
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

  return (
    <div className={wrapperStyles.toastWrapper}>
      <button type='button' className={styles.close} onClick={onDelete}>
        <FontAwesomeIcon icon={faTimes} size='xs' />
      </button>

      {message}
    </div>
  );
};
