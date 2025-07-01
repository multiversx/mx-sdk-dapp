import { SignedTransactionsType, SignedTransactionsBodyType } from 'types';
export interface UseGetPendingTransactionsReturnType {
    pendingTransactions: SignedTransactionsType;
    pendingTransactionsArray: [string, SignedTransactionsBodyType][];
    hasPendingTransactions: boolean;
}
export declare function useGetPendingTransactions(): UseGetPendingTransactionsReturnType;
//# sourceMappingURL=useGetPendingTransactions.d.ts.map