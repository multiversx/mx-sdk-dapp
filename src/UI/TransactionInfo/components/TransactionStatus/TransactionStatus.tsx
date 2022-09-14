import React from 'react';

import {
  faHourglass,
  faTimes,
  faBan,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import {
  getTransactionStatus,
  getTransactionStatusText
} from 'utils/transactions/transactionInfoHelpers';

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

export const TransactionStatus = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  const { Icon } = getStatusIconAndColor(transaction);

  return (
    <span className='d-flex align-items-center text-capitalize mr-2'>
      <Icon />
      {getTransactionStatusText(transaction)}
    </span>
  );
};
