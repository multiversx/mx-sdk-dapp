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

const CustomToast = (props: CustomToastType) => {
  const { onDelete, message, duration, containerClassName } = props;

  useEffect(() => {
    if (duration) {
      const timeout = setTimeout(onDelete, duration);

      return () => {
        clearTimeout(timeout);
      };
    } else {
      return () => null;
    }
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
