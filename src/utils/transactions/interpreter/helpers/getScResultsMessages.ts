import { ServerTransactionType } from 'types/serverTransactions.types';

export default function getScResultsMessages(
  transaction: ServerTransactionType
) {
  return (
    transaction?.results
      ?.map((result) => result.returnMessage)
      .filter((messages): messages is string => Boolean(messages)) ?? []
  );
}
