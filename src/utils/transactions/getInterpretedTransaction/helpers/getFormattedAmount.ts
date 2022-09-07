import { ServerTransactionType } from 'types/serverTransactions.types';
import { formatAmount } from 'utils/operations/formatAmount';
import { defaultAmountFormatConfig } from './defaultInterpreterConfig';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// TODO: remove
export function getFormattedAmount(
  transaction: ServerTransactionType,
  amountFormatConfig = defaultAmountFormatConfig
) {
  return formatAmount({
    ...amountFormatConfig,
    input: transaction.value
  });
}
