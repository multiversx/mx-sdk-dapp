import { SignedTransactionsType, SignedTransactionsBodyType } from 'types';
export interface useGetFailedTransactionsReturnType {
    failedTransactions: SignedTransactionsType;
    failedTransactionsArray: [string, SignedTransactionsBodyType][];
    hasFailedTransactions: boolean;
}
export declare function useGetFailedTransactions(): useGetFailedTransactionsReturnType;
//# sourceMappingURL=useGetFailedTransactions.d.ts.map