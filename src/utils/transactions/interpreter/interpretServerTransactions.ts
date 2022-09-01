import {
  ExtendedTransactionType,
  InterpretServerTransactionsType
} from 'types/interpretedTransactions.types';
import { defaultAmountFormatConfig } from './helpers';
import { interpretServerTransaction } from './interpretServerTransaction';

export function interpretServerTransactions({
  transactions,
  address,
  amountFormatConfig = defaultAmountFormatConfig,
  explorerAddress
}: InterpretServerTransactionsType): ExtendedTransactionType[] {
  return transactions.map((transaction) =>
    interpretServerTransaction({
      transaction,
      address,
      amountFormatConfig,
      explorerAddress
    })
  );
}
