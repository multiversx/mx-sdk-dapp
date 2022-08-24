import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { WithClassnameType } from '../../types';
import styles from '../dappModal.scss';

type DappModalHeaderProps = {
  visible?: boolean;
  headerText?: string;
  customHeader?: JSX.Element | string;
  closeButtonClassName?: string;
  onHide?: () => void;
} & WithClassnameType;

export const DappModalHeader: React.FC<DappModalHeaderProps> = ({
  visible,
  headerText,
  customHeader,
  className,
  closeButtonClassName,
  onHide
}) => {
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
        className={`${styles.dappModalCloseButton} ${globalStyles.btn} ${globalStyles.btnLight} ${closeButtonClassName}`}
        onClick={onHide}
      >
        <FontAwesomeIcon size='lg' icon={faTimes} />
      </button>
    </div>
  );
};
