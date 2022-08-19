import { defaultNetwork } from 'reduxStore/slices';
import { denominate } from 'utils/operations/denominate';
import { DenominationConfig } from '../TransactionsInterpreter';
import { UITransactionType } from './types';

export function getDenominatedValue(
  transaction: UITransactionType,
  { decimals, denomination, showLastNonZeroDecimal }: DenominationConfig = {
    decimals: Number(defaultNetwork.decimals),
    denomination: Number(defaultNetwork.egldDenomination),
    showLastNonZeroDecimal: false
  }
) {
  const value = transaction.value;

  return denominate({
    input: value,
    denomination,
    decimals,
    showLastNonZeroDecimal
  });
}
