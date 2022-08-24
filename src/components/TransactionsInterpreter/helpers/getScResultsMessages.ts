import { ServerTransactionType } from 'types/serverTransactions';

export default function getScResultsMessages(
  transaction: ServerTransactionType
) {
  return (
    transaction?.results
      ?.map((result) => result.returnMessage)
      .filter((messages): messages is string => Boolean(messages)) ?? []
  );
}
