import { Transaction } from '@multiversx/sdk-core/out';

export const getAreAllTransactionsSignedByGuardian = ({
  transactions,
  isGuarded
}: {
  transactions: Transaction[];
  isGuarded?: boolean;
}) => {
  if (!isGuarded) {
    return true;
  }

  if (transactions.length === 0) {
    return false;
  }

  return transactions.every((tx) =>
    Boolean(tx.getGuardianSignature().toString('hex'))
  );
};
