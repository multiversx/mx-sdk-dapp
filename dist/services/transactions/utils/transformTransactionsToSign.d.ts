import { Transaction } from '@multiversx/sdk-core';
import { SimpleTransactionType } from 'types';
export declare const transformTransactionsToSign: ({ transactions, minGasLimit }: {
    transactions: (SimpleTransactionType | Transaction)[];
    minGasLimit?: number | undefined;
}) => Promise<(Transaction | SimpleTransactionType)[]>;
//# sourceMappingURL=transformTransactionsToSign.d.ts.map