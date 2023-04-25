import { Transaction } from '@multiversx/sdk-core/out';

export const getAreAllTransactionsSignedByGuardian = ({
  transactions,
  isGuarded
}: {
  transactions: Transaction[];
  isGuarded?: boolean;
}) => {
  const allSignedByGuardian = isGuarded
    ? transactions.every((tx) =>
        Boolean(tx.getGuardianSignature().toString('hex'))
      )
    : true;
  return allSignedByGuardian;
};
