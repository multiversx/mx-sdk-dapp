import { SignedTransactionType } from 'types';

export function getIsSequential({
  transactions
}: {
  transactions?: SignedTransactionType[] | SignedTransactionType[][];
}) {
  return transactions?.some((item) => Array.isArray(item));
}
