/**
 * Returns the higher nonce between the latest nonce of the account and the transaction nonce
 * Used to set the correct nonce for a transaction in the batch
 */
export const computeNonce = ({
  accountNonce,
  transactionNonce
}: {
  accountNonce: number;
  transactionNonce?: number;
}) => {
  if (!transactionNonce) {
    return accountNonce;
  }

  return transactionNonce > accountNonce ? transactionNonce : accountNonce;
};
