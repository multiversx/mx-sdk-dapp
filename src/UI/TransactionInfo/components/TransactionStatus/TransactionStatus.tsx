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
import { WithTransactionType } from 'UI/types';
import {
  getTransactionStatus,
  getTransactionStatusText
} from 'utils/transactions/transactionInfoHelpers';

import globalStyles from 'assets/sass/main.scss';

export const getStatusIconAndColor = (
  transaction: InterpretedTransactionType
) => {
  let Icon = () => <></>;
  let color = '';

  const { failed, invalid, pending, success } = getTransactionStatus(
    transaction
  );

  if (transaction.pendingResults) {
    color = globalStyles.textWarning;
    Icon = () => (
      <FontAwesomeIcon
        icon={faHourglass}
        className={classNames(globalStyles.mr2, color)}
      />
    );
  }

  if (failed) {
    color = globalStyles.textDanger;
    Icon = () => (
      <FontAwesomeIcon
        icon={faTimes}
        className={classNames(globalStyles.mr2, color)}
      />
    );
  }

  if (invalid) {
    color = globalStyles.textDanger;
    Icon = () => (
      <FontAwesomeIcon
        icon={faBan}
        className={classNames(globalStyles.mr2, color)}
      />
    );
  }

  if (success) {
    color = globalStyles.textSuccess;
    Icon = () => (
      <FontAwesomeIcon
        icon={faCheckCircle}
        className={classNames(globalStyles.mr2, color)}
      />
    );
  }

  if (pending) {
    color = globalStyles.textWarning;
    Icon = () => (
      <FontAwesomeIcon
        icon={faHourglass}
        className={classNames(globalStyles.mr2, color)}
      />
    );
  }

  return {
    Icon,
    color
  };
};

export const TransactionStatus = ({ transaction }: WithTransactionType) => {
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
