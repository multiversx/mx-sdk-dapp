import React, { useEffect, Fragment } from 'react';

import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from 'optionalPackages/react-fontawesome';

import styles from './styles.scss';

interface CustomToastType {
  onDelete: () => void;
  message: string;
  duration?: number;
}

const CustomToast = (props: CustomToastType) => {
  const { onDelete, message, duration } = props;

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
    <Fragment>
      <button type='button' className={styles.close} onClick={onDelete}>
        <ReactFontawesome.FontAwesomeIcon icon={icons.faTimes} size='xs' />
      </button>

      {message}
    </Fragment>
  );
};

export default CustomToast;
