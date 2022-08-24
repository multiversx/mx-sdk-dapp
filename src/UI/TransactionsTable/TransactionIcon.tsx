import React from 'react';
import { faBan } from '@fortawesome/free-solid-svg-icons/faBan';
import { faHourglass } from '@fortawesome/free-solid-svg-icons/faHourglass';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import lodash from 'lodash';
import globalStyles from 'assets/sass/main.scss';
import { getOperationsMessages } from 'components/TransactionsInterpreter/helpers/getOperationsMessages';
import { getReceiptMessage } from 'components/TransactionsInterpreter/helpers/getReceiptMessage';
import getScResultsMessages from 'components/TransactionsInterpreter/helpers/getScResultsMessages';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import { ServerTransactionType } from 'types/server-transactions';

interface TransactionIconType {
  transaction: ServerTransactionType;
}

export const TransactionIcon = ({ transaction }: TransactionIconType) => {
  const statusIs = (compareTo: string) =>
    transaction.status.toLowerCase() === compareTo.toLowerCase();

  const transactionMessages = Array.from(
    new Set([
      ...getScResultsMessages(transaction),
      ...getOperationsMessages(transaction),
      getReceiptMessage(transaction)
    ])
  );

  const failed =
    statusIs(TransactionServerStatusesEnum.fail) ||
    statusIs(TransactionServerStatusesEnum.fail);
  const invalid =
    statusIs(TransactionServerStatusesEnum.notExecuted) ||
    statusIs(TransactionServerStatusesEnum.invalid);
  const pending = statusIs(TransactionServerStatusesEnum.pending);

  let icon;
  if (failed) icon = faTimes;
  if (invalid) icon = faBan;
  if (pending) icon = faHourglass;

  const tooltip = `${lodash.upperFirst(transaction.status)} ${
    (failed || invalid) && transactionMessages.length > 0
      ? transactionMessages.join(',')
      : ''
  }`;

  return icon ? (
    <FontAwesomeIcon
      title={tooltip}
      icon={icon}
      size={icon === faTimes ? '1x' : 'sm'}
      className={classNames(globalStyles.mr1, globalStyles.textSecondary)}
    />
  ) : null;
};
