import { Transaction } from 'lib/sdkCore';
import { computeNonce } from './computeNonce';

export const computeNonces = ({
  latestNonce,
  transactions
}: {
  latestNonce: number;
  transactions: Array<Transaction>;
}): Array<Transaction> => {
  if (transactions.length === 0) {
    return transactions;
  }

  return transactions.map((tx: Transaction, index: number) => {
    const nextNonce = latestNonce + index;

    const transactionNonce = tx.toPlainObject().nonce;

    // stop replacing nonce if transaction is configured with a higher nonce than the existing one
    const computedNonce = computeNonce({
      accountNonce: nextNonce,
      transactionNonce
    });

    tx.nonce = BigInt(computedNonce);

    return tx;
  });
};
