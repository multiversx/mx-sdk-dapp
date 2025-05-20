import { Transaction } from '@multiversx/sdk-core/out';

export const getTransactionsNeedGuardianSigning = ({
  transactions,
  isGuarded
}: {
  transactions: Transaction[];
  isGuarded?: boolean;
}) => {
  if (!isGuarded || transactions.length === 0) {
    return false;
  }

  const allSigned = transactions.every((tx) =>
    Boolean(tx.getGuardianSignature().toString('hex'))
  );

  return !allSigned;
};
