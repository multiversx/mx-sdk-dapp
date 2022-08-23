import { ServerTransactionType } from 'types/server-transactions';

export default function getScResultsMessages(
  transaction: ServerTransactionType
) {
  return (
    transaction?.results
      ?.map((result) => result.returnMessage)
      .filter((messages): messages is string => Boolean(messages)) ?? []
  );
}
