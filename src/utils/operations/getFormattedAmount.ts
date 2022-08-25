import { DenominationConfig } from 'components/TransactionsInterpreter/TransactionsInterpreter';
import { defaultNetwork } from 'reduxStore/slices';
import { ServerTransactionType } from 'types/serverTransactions.types';
import { formatAmount } from './formatAmount';

export function getFormattedAmount(
  transaction: ServerTransactionType,
  { decimals, denomination, showLastNonZeroDecimal }: DenominationConfig = {
    decimals: Number(defaultNetwork.decimals),
    denomination: Number(defaultNetwork.egldDenomination),
    showLastNonZeroDecimal: false
  }
) {
  const value = transaction.value;

  return formatAmount({
    input: value,
    decimals: denomination,
    digits: decimals,
    showLastNonZeroDecimal
  });
}
