import React from 'react';
import { faBan } from '@fortawesome/free-solid-svg-icons/faBan';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faHourglass } from '@fortawesome/free-solid-svg-icons/faHourglass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UITransactionType } from 'components/TransactionsInterpreter/helpers/types';
import getScResultsMessages from 'components/TransactionsInterpreter/helpers/getScResultsMessages';
import { getOperationsMessages } from 'components/TransactionsInterpreter/helpers/getOperationsMessages';
import { getReceiptMessages } from 'components/TransactionsInterpreter/helpers/getReceiptMessages';
import { TransactionServerStatusesEnum } from '../../types';
import { capitalizeFirstLetter } from 'components/TransactionsInterpreter/helpers/capitalizeFirstLetter';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';

interface TransactionIconType {
  transaction: UITransactionType;
}

export const TransactionIcon = ({ transaction }: TransactionIconType) => {
  const statusIs = (compareTo: string) =>
    transaction.status.toLowerCase() === compareTo.toLowerCase();

  const transactionMessages = Array.from(
    new Set([
      ...getScResultsMessages(transaction),
      ...getOperationsMessages(transaction),
      ...getReceiptMessages(transaction)
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

  return icon ? (
    <FontAwesomeIcon
      title={`
            ${capitalizeFirstLetter(transaction.status)}
            ${
              (failed || invalid) && transactionMessages.length > 0
                ? transactionMessages.join(',')
                : ''
            }
          `}
      icon={icon}
      size={icon === faTimes ? '1x' : 'sm'}
      className={classNames(globalStyles.mr1, globalStyles.textSecondary)}
    />
  ) : null;
};
