import React, { useEffect } from 'react';

import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from 'optionalPackages/react-fontawesome';

import styles from './styles.scss';

const CustomToastComponent = ({
  onDelete,
  message,
  duration
}: {
  onDelete: () => void;
  message: string;
  duration?: number;
}) => {
  useEffect(() => {
    if (duration) {
      setTimeout(onDelete, duration);
    }
  }, []);

  return (
    <div className={styles.toast}>
      <button type='button' className={styles.close} onClick={onDelete}>
        <ReactFontawesome.FontAwesomeIcon icon={icons.faTimes} size='xs' />
      </button>

      {message}
    </div>
  );
};

export default CustomToastComponent;
