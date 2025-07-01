/**
 * Returns the higher nonce between the latest nonce of the account and the transaction nonce
 * Used to set the correct nonce for a transaction in the batch
 */
export declare const computeTransactionNonce: ({ accountNonce, transactionNonce }: {
    accountNonce: number;
    transactionNonce?: number | undefined;
}) => number;
//# sourceMappingURL=computeTransactionNonce.d.ts.map