import { InterpretedTransactionType } from 'types';
import { getOperationsMessages } from './getOperationsMessages';
import { getReceiptMessage } from './getReceiptMessage';
import getScResultsMessages from './getScResultsMessages';

export function getTransactionMessages(
  transaction: InterpretedTransactionType
) {
  const transactionMessages = Array.from(
    new Set([
      ...getScResultsMessages(transaction),
      ...getOperationsMessages(transaction),
      getReceiptMessage(transaction)
    ])
  );
  return transactionMessages;
}
