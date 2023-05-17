import { Transaction } from '@multiversx/sdk-core';
import { computeTransactionNonce } from '../../../services/transactions/computeTransactionNonce';

export const setTransactionNonces = (
  latestNonce: number,
  transactions: Array<Transaction>
): Array<Transaction> => {
  if (transactions.length === 0) {
    return transactions;
  }

  return transactions.map((tx: Transaction, index: number) => {
    const nextNonce = latestNonce + index;

    const txNonce = tx.getNonce().valueOf();

    // stop replacing nonce if transaction is configured with a higher nonce than the existing one
    const computedNonce = computeTransactionNonce({
      accountNonce: nextNonce,
      transactionNonce: txNonce
    });

    tx.setNonce(computedNonce);

    return tx;
  });
};
