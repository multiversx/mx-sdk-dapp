import { IconNamesEnum } from 'types/enums.types';
import { ServerTransactionType } from 'types/serverTransactions.types';
import { capitalize } from 'utils/operations/capitalize';
import { getTransactionMessages } from './getTransactionMessages';
import { getTransactionStatus } from './getTransactionStatus';

export const getTransactionIconInfo = (
  transaction: ServerTransactionType
): { icon?: `${IconNamesEnum}`; tooltip: string } => {
  const transactionMessages = getTransactionMessages(transaction);

  const { failed, invalid, pending } = getTransactionStatus(transaction);

  const showErrorText = (failed || invalid) && transactionMessages.length > 0;
  const errorText = showErrorText ? transactionMessages.join(',') : '';
  const tooltip = `${capitalize(transaction.status)} ${errorText}`;

  if (failed) {
    return { icon: IconNamesEnum.close, tooltip };
  }

  if (invalid) {
    return { icon: IconNamesEnum.ban, tooltip };
  }

  if (pending) {
    return { icon: IconNamesEnum.hourglass, tooltip };
  }

  return { tooltip };
};
