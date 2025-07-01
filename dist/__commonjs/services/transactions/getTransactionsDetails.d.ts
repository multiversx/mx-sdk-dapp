import { ServerTransactionType } from 'types';
export declare const getTransactionsDetails: (txHashes: string[]) => Promise<{
    data: ServerTransactionType[] | undefined;
    success: boolean;
}>;
//# sourceMappingURL=getTransactionsDetails.d.ts.map