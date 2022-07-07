import classNames from 'classnames';
import styles from './transaction-status-toast.scss';
import globalStyles from 'assets/sass/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faTimes, faWarning } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { StatusIconType } from './types';

type StatusIconProps = {
  type: StatusIconType;
};

export const StatusIcon: React.FC<StatusIconProps> = ({ type }) => {
  switch (type) {
    case 'info':
      return (
        <div
          className={classNames(
            styles.transactionsStatusToastIcon,
            globalStyles.success
          )}
        >
          <FontAwesomeIcon icon={faInfo} className={styles.svg} size='5x' />
        </div>
      );
    case 'warning':
      return (
        <div
          className={classNames(
            styles.transactionsStatusToastIcon,
            globalStyles.warning,
            styles.warningIcon
          )}
        >
          <FontAwesomeIcon icon={faWarning} className={styles.svg} size='5x' />
        </div>
      );
    case 'error':
      return (
        <div
          className={classNames(
            styles.transactionsStatusToastIcon,
            globalStyles.danger,
            styles.errorIcon
          )}
        >
          <FontAwesomeIcon icon={faTimes} className={styles.svg} size='5x' />
        </div>
      );
    default:
      return null;
  }
};
