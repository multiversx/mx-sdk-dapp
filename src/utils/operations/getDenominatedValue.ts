import { DenominationConfig } from 'components/TransactionsInterpreter/TransactionsInterpreter';
import { defaultNetwork } from 'reduxStore/slices';
import { TransactionType } from 'types/server-transations';
import { denominate } from 'utils/operations/denominate';

export function getDenominatedValue(
  transaction: TransactionType,
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
