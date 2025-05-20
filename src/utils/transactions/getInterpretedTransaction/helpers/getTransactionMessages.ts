import { ServerTransactionType } from 'types/serverTransactions.types';
import { getOperationsMessages } from './getOperationsMessages';
import { getReceiptMessage } from './getReceiptMessage';
import { getScResultsMessages } from './getScResultsMessages';

export function getTransactionMessages(transaction: ServerTransactionType) {
  return Array.from(
    new Set([
      ...getScResultsMessages(transaction),
      ...getOperationsMessages(transaction),
      getReceiptMessage(transaction)
    ])
  ).filter((el) => Boolean(el));
}
