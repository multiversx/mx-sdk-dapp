import { SignedTransactionType } from 'types';

export function getIsSequential({
  transactions
}: {
  transactions?: SignedTransactionType[] | SignedTransactionType[][];
}) {
  return transactions?.some((transaction) => Array.isArray(transaction));
}
