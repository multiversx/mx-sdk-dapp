import { UITransactionType } from './types';
import { networkConfigSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';
import { denominate } from 'utils';
import { DenominationConfig } from '../TransactionsInterpreter';

export function getDenominatedValue(
  transaction: UITransactionType,
  { decimals, denomination, showLastNonZeroDecimal = false }: DenominationConfig
) {
  const networkConfig = networkConfigSelector(store.getState());

  const value = transaction.value;

  return denominate({
    input: value,
    denomination: Number(
      denomination ? denomination : networkConfig.network.egldDenomination
    ),
    decimals: Number(decimals ? decimals : networkConfig.network.decimals),
    showLastNonZeroDecimal
  });
}
