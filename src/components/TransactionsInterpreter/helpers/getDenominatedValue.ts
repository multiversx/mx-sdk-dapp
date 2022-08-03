import { UITransactionType } from './types';
import { denominate } from 'utils';
import { DenominationConfig } from '../TransactionsInterpreter';
import { defaultNetwork } from 'reduxStore/slices';

export function getDenominatedValue(
  transaction: UITransactionType,
  {
    decimals = Number(defaultNetwork.decimals),
    denomination = Number(defaultNetwork.egldDenomination),
    showLastNonZeroDecimal = false
  }: DenominationConfig
) {
  const value = transaction.value;

  return denominate({
    input: value,
    denomination,
    decimals,
    showLastNonZeroDecimal
  });
}
