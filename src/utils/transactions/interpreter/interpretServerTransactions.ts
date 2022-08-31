import { defaultAmountFormatConfig } from './helpers';
import { interpretServerTransaction } from './interpretServerTransaction';
import {
  ExtendedTransactionType,
  InterpretServerTransactionsType
} from './transactionsInterpreter.types';

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
