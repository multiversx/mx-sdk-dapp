import React, { useEffect } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.scss';

interface CustomToastType {
  onDelete: () => void;
  message: string;
  duration?: number;
  containerClassName: string;
}

const CustomToast = ({
  onDelete,
  message,
  duration,
  containerClassName
}: CustomToastType) => {
  useEffect(() => {
    let timeout: any = null;
    if (duration) {
      timeout = setTimeout(onDelete, duration);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={containerClassName}>
      <button type='button' className={styles.close} onClick={onDelete}>
        <FontAwesomeIcon icon={faTimes} size='xs' />
      </button>

      {message}
    </div>
  );
};

export default CustomToast;
