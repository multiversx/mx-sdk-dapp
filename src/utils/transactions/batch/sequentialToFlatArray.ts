import { SignedTransactionType } from 'types';
import { getIsSequential } from './getIsSequential';

export function sequentialToFlatArray({
  transactions = []
}: {
  transactions?: SignedTransactionType[] | SignedTransactionType[][];
}) {
  return getIsSequential({ transactions })
    ? transactions.flat()
    : (transactions as SignedTransactionType[]);
}
