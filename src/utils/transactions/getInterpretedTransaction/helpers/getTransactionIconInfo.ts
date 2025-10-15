import { ServerTransactionType } from 'types/serverTransactions.types';
import { capitalize } from 'utils/operations/capitalize';
import { getTransactionMessages } from './getTransactionMessages';
import { getTransactionStatus } from './getTransactionStatus';
import { IconNameEnum } from 'types';

export const getTransactionIconInfo = (transaction: ServerTransactionType) => {
  const transactionMessages = getTransactionMessages(transaction);

  const { failed, invalid, pending } = getTransactionStatus(transaction);

  const showErrorText = (failed || invalid) && transactionMessages.length > 0;
  const errorText = showErrorText ? transactionMessages.join(',') : '';
  const tooltip = `${capitalize(transaction.status)} ${errorText}`;

  if (failed) {
    return { icon: IconNameEnum.close, tooltip };
  }

  if (invalid) {
    return { icon: IconNameEnum.ban, tooltip };
  }

  if (pending) {
    return { icon: IconNameEnum.hourglass, tooltip };
  }

  return { icon: null, tooltip };
};
