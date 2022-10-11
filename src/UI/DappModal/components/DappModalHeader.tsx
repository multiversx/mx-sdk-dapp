import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { WithClassnameType } from '../../types';

import styles from '../dappModalStyles.scss';
import globalStyles from 'assets/sass/main.scss';

interface DappModalHeaderPropsType extends WithClassnameType {
  visible?: boolean;
  headerText?: string;
  customHeader?: JSX.Element | string;
  closeButtonClassName?: string;
  onHide?: () => void;
}

export const DappModalHeader = ({
  visible,
  headerText,
  customHeader,
  className,
  closeButtonClassName,
  onHide
}: DappModalHeaderPropsType) => {
  if (!visible) {
    return null;
  }

  return customHeader ? (
    <div className={classNames(styles.dappModalHeader, className)}>
      {customHeader}
    </div>
  ) : (
    <div className={classNames(styles.dappModalHeader, className)}>
      <div className={styles.dappModalHeaderText}>{headerText}</div>

      <button
        onClick={onHide}
        className={classNames(
          styles.dappModalCloseButton,
          globalStyles.btn,
          globalStyles.btnLight,
          closeButtonClassName
        )}
      >
        <FontAwesomeIcon size='lg' icon={faTimes} />
      </button>
    </div>
  );
};
