import React from 'react';
import { SignedTransactionsBodyType, SignedTransactionsType } from 'types';
import { TransactionToast } from 'UI/TransactionsToastList/components/TransactionToast';

export interface TransactionToastGuardPropsType {
  signedTransactionsToRender: SignedTransactionsType;
  toastId: string;
  type: string;
  startTimestamp: number;
  successfulToastLifetime: number | undefined;
  handleDeleteTransactionToast: (toastId: string) => void;
  className?: string;
}

export const TransactionToastGuard = ({
  className,
  signedTransactionsToRender,
  successfulToastLifetime,
  handleDeleteTransactionToast,
  startTimestamp,
  toastId
}: TransactionToastGuardPropsType) => {
  const currentTx: SignedTransactionsBodyType =
    signedTransactionsToRender[toastId];

  if (currentTx == null) {
    return null;
  }

  const invalidCurrentTx =
    currentTx?.transactions == null || currentTx?.status == null;

  if (invalidCurrentTx) {
    return null;
  }

  const { transactions, status } = currentTx;

  return (
    <TransactionToast
      key={toastId}
      startTimestamp={startTimestamp}
      toastId={toastId}
      transactions={transactions}
      status={status}
      lifetimeAfterSuccess={successfulToastLifetime}
      onDelete={handleDeleteTransactionToast}
      className={className}
    />
  );
};
