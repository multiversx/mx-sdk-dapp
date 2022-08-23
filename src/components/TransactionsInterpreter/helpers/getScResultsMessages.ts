import { TransactionType } from 'types/server-transations';

export default function getScResultsMessages(transaction: TransactionType) {
  return (
    transaction?.results
      ?.map((result) => result.returnMessage)
      .filter((messages): messages is string => Boolean(messages)) ?? []
  );
}
