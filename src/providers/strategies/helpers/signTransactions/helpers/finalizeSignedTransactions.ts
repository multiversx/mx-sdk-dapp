import { Transaction } from 'lib/sdkCore';
import { SignTransactionsOptionsType } from 'providers/DappProvider/helpers/signTransactions/signTransactionsWithProvider';
import { guardTransactions as getGuardedTransactions } from 'providers/strategies/helpers/signTransactions/helpers/guardTransactions/guardTransactions';

type FinalizeSignedTransactionsType = {
  signedTransactions: Transaction[];
  options?: SignTransactionsOptionsType;
  guardTransactions?: typeof getGuardedTransactions;
};

export async function finalizeSignedTransactions({
  signedTransactions,
  options,
  guardTransactions = getGuardedTransactions
}: FinalizeSignedTransactionsType): Promise<Transaction[]> {
  const finalizedTransactions =
    (await options?.callback?.(signedTransactions)) || signedTransactions;

  if (options?.skipGuardian) {
    return finalizedTransactions;
  }

  return await guardTransactions(finalizedTransactions);
}
