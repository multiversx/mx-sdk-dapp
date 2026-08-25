import {
  AVERAGE_TX_DURATION_MS,
  CROSS_SHARD_ROUNDS
} from 'constants/transactions.constants';
import { accountSelector } from 'store/selectors/accountSelectors';
import { roundDurationSelectorSelector } from 'store/selectors/networkSelectors';
import { getState } from 'store/store';
import { SignedTransactionType } from 'types/transactions.types';
import { getAreTransactionsCrossShards } from './getAreTransactionsCorssShards';
import { isBatchTransaction } from './isBatchTransaction';

const getRoundDuration = (roundDuration?: number) => {
  const isUsableRoundDuration =
    typeof roundDuration === 'number' &&
    Number.isFinite(roundDuration) &&
    roundDuration > 0;

  // add 60ms for network lag
  return (
    Number(isUsableRoundDuration ? roundDuration : AVERAGE_TX_DURATION_MS) + 60
  );
};

export const getToastDuration = (
  transactions: SignedTransactionType[] | SignedTransactionType[][]
) => {
  let totalDuration = 0;
  const state = getState();
  const accountShard = accountSelector(state)?.shard;
  const transactionDuration = getRoundDuration(
    roundDurationSelectorSelector(state)
  );

  if (isBatchTransaction(transactions)) {
    transactions.forEach((transactionGroup) => {
      const isCrossShard = getAreTransactionsCrossShards(
        transactionGroup,
        accountShard
      );
      totalDuration += isCrossShard
        ? CROSS_SHARD_ROUNDS * transactionDuration
        : transactionDuration;
    });
    return totalDuration;
  }

  const isCrossShard = getAreTransactionsCrossShards(
    transactions,
    accountShard
  );
  totalDuration = isCrossShard
    ? CROSS_SHARD_ROUNDS * transactionDuration
    : transactionDuration;

  return totalDuration;
};
