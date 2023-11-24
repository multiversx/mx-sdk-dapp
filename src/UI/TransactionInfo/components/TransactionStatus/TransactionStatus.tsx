import React from 'react';
import {
  faHourglass,
  faTimes,
  faBan,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import {
  getTransactionStatus,
  getTransactionStatusText
} from 'utils/transactions/transactionInfoHelpers';
import { WithClassnameType, WithTransactionType } from '../../../../UI/types';

export const getStatusIconAndColor = (
  transaction: InterpretedTransactionType,
  globalStyles?: WithStylesImportType['globalStyles']
) => {
  let Icon = () => <></>;
  let color = '';

  const { failed, invalid, pending, success } =
    getTransactionStatus(transaction);

  if (transaction.pendingResults) {
    color = globalStyles?.textWarning;
    Icon = () => (
      <FontAwesomeIcon
        icon={faHourglass}
        className={classNames(globalStyles?.mr2, color)}
      />
    );
  }

  if (failed) {
    color = globalStyles?.textDanger;
    Icon = () => (
      <FontAwesomeIcon
        icon={faTimes}
        className={classNames(globalStyles?.mr2, color)}
      />
    );
  }

  if (invalid) {
    color = globalStyles?.textDanger;
    Icon = () => (
      <FontAwesomeIcon
        icon={faBan}
        className={classNames(globalStyles?.mr2, color)}
      />
    );
  }

  if (success) {
    color = globalStyles?.textSuccess;
    Icon = () => (
      <FontAwesomeIcon
        icon={faCheckCircle}
        className={classNames(globalStyles?.mr2, color)}
      />
    );
  }

  if (pending) {
    color = globalStyles?.textWarning;
    Icon = () => (
      <FontAwesomeIcon
        icon={faHourglass}
        className={classNames(globalStyles?.mr2, color)}
      />
    );
  }

  return {
    Icon,
    color
  };
};

const TransactionStatusComponent = ({
  className,
  transaction,
  globalStyles
}: WithTransactionType & WithClassnameType & WithStylesImportType) => {
  const { Icon } = getStatusIconAndColor(transaction, globalStyles);

  return (
    <span
      className={classNames(
        globalStyles?.dFlex,
        globalStyles?.alignItemsCenter,
        globalStyles?.textCapitalize,
        globalStyles?.mr2,
        className
      )}
    >
      <Icon />

      {getTransactionStatusText(transaction)}
    </span>
  );
};

export const TransactionStatus = withStyles(TransactionStatusComponent, {});
