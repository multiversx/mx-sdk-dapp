import { Transaction } from 'lib/sdkCore';

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
    Boolean(tx.guardianSignature.toString())
  );

  return !allSigned;
};
