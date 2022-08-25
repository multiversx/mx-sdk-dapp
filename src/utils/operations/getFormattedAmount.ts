import { FormatAmountConfig } from 'components/TransactionsInterpreter/TransactionsInterpreter';
import { defaultNetwork } from 'reduxStore/slices';
import { ServerTransactionType } from 'types/serverTransactions.types';
import { formatAmount } from './formatAmount';

export function getFormattedAmount(
  transaction: ServerTransactionType,
  { digits, decimals, showLastNonZeroDecimal }: FormatAmountConfig = {
    decimals: Number(defaultNetwork.egldDenomination),
    digits: Number(defaultNetwork.decimals),
    showLastNonZeroDecimal: false
  }
) {
  const value = transaction.value;

  return formatAmount({
    input: value,
    decimals,
    digits,
    showLastNonZeroDecimal
  });
}
