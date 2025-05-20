import {
  AVERAGE_TX_DURATION_MS,
  CROSS_SHARD_ROUNDS
} from 'constants/transactions.constants';
import { accountSelector } from 'store/selectors';
import { getState } from 'store/store';
import { SignedTransactionType } from 'types/transactions.types';
import { getAreTransactionsCrossShards } from './getAreTransactionsCorssShards';
import { isBatchTransaction } from './isBatchTransaction';

export const getToastDuration = (
  transactions: SignedTransactionType[] | SignedTransactionType[][]
) => {
  let totalDuration = 0;
  const accountShard = accountSelector(getState())?.shard;

  if (isBatchTransaction(transactions)) {
    transactions.forEach((transactionGroup) => {
      const isCrossShard = getAreTransactionsCrossShards(
        transactionGroup,
        accountShard
      );
      totalDuration += isCrossShard
        ? CROSS_SHARD_ROUNDS * AVERAGE_TX_DURATION_MS
        : AVERAGE_TX_DURATION_MS;
    });
    return totalDuration;
  }

  const isCrossShard = getAreTransactionsCrossShards(
    transactions,
    accountShard
  );
  totalDuration = isCrossShard
    ? CROSS_SHARD_ROUNDS * AVERAGE_TX_DURATION_MS
    : AVERAGE_TX_DURATION_MS;

  return totalDuration;
};
