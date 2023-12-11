import React from 'react';
import { faInfo, faTimes, faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { StatusIconType } from './transactionStatusToast.types';

export interface StatusIconPropsType {
  type: StatusIconType;
}

const StatusIconComponent = ({
  type,
  globalStyles,
  styles
}: StatusIconPropsType & WithStylesImportType) => {
  switch (type) {
    case StatusIconType.INFO:
      return (
        <div
          className={classNames(
            styles?.transactionsStatusToastIcon,
            globalStyles?.success
          )}
        >
          <FontAwesomeIcon icon={faInfo} className={styles?.svg} size='5x' />
        </div>
      );

    case StatusIconType.WARNING:
      return (
        <div
          className={classNames(
            styles?.transactionsStatusToastIcon,
            globalStyles?.warning,
            styles?.warningIcon
          )}
        >
          <FontAwesomeIcon icon={faWarning} className={styles?.svg} size='5x' />
        </div>
      );

    case StatusIconType.ERROR:
      return (
        <div
          className={classNames(
            styles?.transactionsStatusToastIcon,
            globalStyles?.danger,
            styles?.errorIcon
          )}
        >
          <FontAwesomeIcon icon={faTimes} className={styles?.svg} size='5x' />
        </div>
      );
    default:
      return null;
  }
};

export const StatusIcon = withStyles(StatusIconComponent, {
  ssrStyles: () =>
    import(
      'components/TransactionStatusToast/transactionStatusToastStyles.scss'
    ),
  clientStyles: () =>
    require('components/TransactionStatusToast/transactionStatusToastStyles.scss')
      .default
});
