import React from 'react';

import {
  faHourglass,
  faTimes,
  faBan,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { InterpretedTransactionType } from 'types/serverTransactions.types';
import {
  getTransactionStatus,
  getTransactionStatusText
} from 'utils/transactions/transactionInfoHelpers';

import globalStyles from 'assets/sass/main.scss';

interface TransactionStatusPropsTypes {
  transaction: InterpretedTransactionType;
}

export const getStatusIconAndColor = (
  transaction: InterpretedTransactionType
) => {
  let Icon = () => <></>;
  let color = '';

  const { failed, invalid, pending, success } = getTransactionStatus(
    transaction
  );

  if (transaction.pendingResults) {
    color = 'text-warning';
    Icon = () => (
      <FontAwesomeIcon icon={faHourglass} className={`mr-2 ${color}`} />
    );
  }

  if (failed) {
    color = 'text-danger';
    Icon = () => <FontAwesomeIcon icon={faTimes} className={`mr-2 ${color}`} />;
  }

  if (invalid) {
    color = 'text-danger';
    Icon = () => <FontAwesomeIcon icon={faBan} className={`mr-2 ${color}`} />;
  }

  if (success) {
    color = 'text-success';
    Icon = () => (
      <FontAwesomeIcon icon={faCheckCircle} className={`mr-2 ${color}`} />
    );
  }

  if (pending) {
    color = 'text-warning';
    Icon = () => (
      <FontAwesomeIcon icon={faHourglass} className={`mr-2 ${color}`} />
    );
  }

  return {
    Icon,
    color
  };
};

export const TransactionStatus = (props: TransactionStatusPropsTypes) => {
  const { transaction } = props;
  const { Icon } = getStatusIconAndColor(transaction);

  return (
    <span
      className={classNames(
        globalStyles.dFlex,
        globalStyles.alignItemsCenter,
        globalStyles.textCapitalize,
        globalStyles.mr2
      )}
    >
      <Icon />

      {getTransactionStatusText(transaction)}
    </span>
  );
};
