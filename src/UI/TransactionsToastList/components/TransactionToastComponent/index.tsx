import React, { useState } from 'react';

import { SignedTransactionsBodyType, SignedTransactionsType } from 'types';

import TransactionToast from 'UI/TransactionToast';

import styles from '../../styles.scss';

interface TransactionToastComponentType {
  signedTransactionsToRender: SignedTransactionsType;
  lifetimeAfterSuccess?: number;
  toastId: string;
}

const TransactionToastComponent = ({
  signedTransactionsToRender,
  toastId,
  ...transactionToastProps
}: TransactionToastComponentType) => {
  const [shouldRender, setShouldRender] = useState(true);
  const currentTx: SignedTransactionsBodyType =
    signedTransactionsToRender[toastId];

  const invalidCurrentTx =
    currentTx?.transactions == null || currentTx?.status == null;

  if (invalidCurrentTx) {
    return null;
  }

  const { transactions, status } = currentTx;

  if (transactions === null || !shouldRender) {
    return null;
  }

  return (
    <div className={styles.toast}>
      <TransactionToast
        {...{
          ...transactionToastProps,
          status,
          transactions,
          toastId,
          onClose: () => setShouldRender(false)
        }}
      />
    </div>
  );
};

export default TransactionToastComponent;
