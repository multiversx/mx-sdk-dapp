import { UITransactionType } from './types';
import { networkConfigSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import { denominate } from 'utils';
import { DenominationConfig } from '../TransactionsInterpreter';

export function getDenominatedValue(
  transaction: UITransactionType,
  denominationConfig: DenominationConfig
) {
  const networkConfig = networkConfigSelector(store.getState());

  const value = transaction.value;
  const { showLastNonZeroDecimal = false } = denominationConfig;
  const decimals = denominationConfig.decimals
    ? denominationConfig.decimals
    : networkConfig.network.decimals;
  const denomination = denominationConfig.denomination
    ? denominationConfig.denomination
    : networkConfig.network.egldDenomination;

  return denominate({
    input: value,
    denomination: Number(denomination),
    decimals: Number(decimals),
    showLastNonZeroDecimal
  });
}
