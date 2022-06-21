import React, { useEffect, Fragment } from 'react';

import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from 'optionalPackages/react-fontawesome';

import styles from './styles.scss';

interface CustomType {
  onDelete: () => void;
  message: string;
  duration?: number;
}

const Custom = (props: CustomType) => {
  const { onDelete, message, duration } = props;

  useEffect(() => {
    if (duration) {
      setTimeout(onDelete, duration);
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

export default Custom;
