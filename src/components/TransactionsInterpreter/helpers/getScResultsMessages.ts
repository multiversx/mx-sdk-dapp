import { TransactionType } from './types';

export default function getScResultsMessages(transaction: TransactionType) {
  return transaction?.results
    ?.map((result) => result.returnMessage)
    .filter((messages): messages is string => Boolean(messages));
}
