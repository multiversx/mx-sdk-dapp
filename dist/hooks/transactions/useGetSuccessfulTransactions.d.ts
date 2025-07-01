import { SignedTransactionsType, SignedTransactionsBodyType } from 'types';
export interface useGetSuccessfulTransactionsReturnType {
    successfulTransactions: SignedTransactionsType;
    successfulTransactionsArray: [string, SignedTransactionsBodyType][];
    hasSuccessfulTransactions: boolean;
}
export declare function useGetSuccessfulTransactions(): useGetSuccessfulTransactionsReturnType;
//# sourceMappingURL=useGetSuccessfulTransactions.d.ts.map