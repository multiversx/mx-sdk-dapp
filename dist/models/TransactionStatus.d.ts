/**
 * An abstraction for handling and interpreting the "status" field of a transaction.
 */
export declare class TransactionStatus {
    /**
     * The raw status, as fetched from the Network.
     */
    readonly status: string;
    /**
     * Creates a new TransactionStatus object.
     */
    constructor(status: string);
    /**
     * Creates an unknown status.
     */
    static createUnknown(): TransactionStatus;
    /**
     * Returns whether the transaction is pending (e.g. in mempool).
     */
    isPending(): boolean;
    /**
     * Returns whether the transaction has been executed (not necessarily with success).
     */
    isExecuted(): boolean;
    /**
     * Returns whether the transaction has been executed successfully.
     */
    isSuccessful(): boolean;
    /**
     * Returns whether the transaction has been executed, but with a failure.
     */
    isFailed(): boolean;
    /**
     * Returns whether the transaction has been executed, but marked as invalid (e.g. due to "insufficient funds").
     */
    isInvalid(): boolean;
    toString(): string;
    valueOf(): string;
    equals(other: TransactionStatus): boolean;
}
//# sourceMappingURL=TransactionStatus.d.ts.map