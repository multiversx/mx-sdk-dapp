/**
 * An abstraction for handling and interpreting the "status" field of a transaction.
 */
export class TransactionStatus {
  /**
   * The raw status, as fetched from the Network.
   */
  readonly status: string;

  /**
   * Creates a new TransactionStatus object.
   */
  constructor(status: string) {
    this.status = (status || '').toLowerCase();
  }

  /**
   * Creates an unknown status.
   */
  static createUnknown(): TransactionStatus {
    return new TransactionStatus('unknown');
  }

  /**
   * Returns whether the transaction is pending (e.g. in mempool).
   */
  isPending(): boolean {
    return this.status == 'received' || this.status == 'pending';
  }

  /**
   * Returns whether the transaction has been executed (not necessarily with success).
   */
  isExecuted(): boolean {
    return this.isSuccessful() || this.isFailed() || this.isInvalid();
  }

  /**
   * Returns whether the transaction has been executed successfully.
   */
  isSuccessful(): boolean {
    return (
      this.status == 'executed' ||
      this.status == 'success' ||
      this.status == 'successful'
    );
  }

  /**
   * Returns whether the transaction has been executed, but with a failure.
   */
  isFailed(): boolean {
    return (
      this.status == 'fail' ||
      this.status == 'failed' ||
      this.status == 'unsuccessful' ||
      this.isInvalid()
    );
  }

  /**
   * Returns whether the transaction has been executed, but marked as invalid (e.g. due to "insufficient funds").
   */
  isInvalid(): boolean {
    return this.status == 'invalid';
  }

  toString(): string {
    return this.status;
  }

  valueOf(): string {
    return this.status;
  }

  equals(other: TransactionStatus) {
    if (!other) {
      return false;
    }

    return this.status == other.status;
  }
}
