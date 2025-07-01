import type { Transaction } from '@multiversx/sdk-core';
import { MultiSignTransactionType, TransactionDataTokenType } from 'types';
export declare function parseMultiEsdtTransferDataForMultipleTransactions({ transactions }: {
    transactions?: Transaction[];
}): {
    allTransactions: MultiSignTransactionType[];
    parsedTransactionsByDataField: Record<string, TransactionDataTokenType>;
};
//# sourceMappingURL=parseMultiEsdtTransferDataForMultipleTransactions.d.ts.map