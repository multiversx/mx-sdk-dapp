import { ServerTransactionType } from 'types/serverTransactions.types';
import { capitalize } from 'utils/operations/capitalize';
import { getTransactionMessages } from './getTransactionMessages';
import { getTransactionStatus } from './getTransactionStatus';

export const getTransactionIconInfo = (transaction: ServerTransactionType) => {
  const transactionMessages = getTransactionMessages(transaction);

  const { failed, invalid, pending } = getTransactionStatus(transaction);

  let icon: string = '';

  if (failed) {
    icon = 'faTimes';
  } else if (invalid) {
    icon = 'faBan';
  } else if (pending) {
    icon = 'faHourglass';
  }

  const showErrorText = (failed || invalid) && transactionMessages.length > 0;
  const errorText = showErrorText ? transactionMessages.join(',') : '';

  const tooltip = `${capitalize(transaction.status)} ${errorText}`;

  return { icon, tooltip };
};
