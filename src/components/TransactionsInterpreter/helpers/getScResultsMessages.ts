import { TransactionType } from 'helpers/types';

export default function getScResultsMessages(transaction: TransactionType) {
  const messages =
    transaction?.results
      ?.map((result) => result.returnMessage)
      .filter((messages): messages is string => Boolean(messages)) ?? [];

  return messages;
}
