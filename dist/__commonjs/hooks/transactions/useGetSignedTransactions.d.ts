import { SignedTransactionsType, SignedTransactionsBodyType } from '../../types';
export interface useGetSignedTransactionsReturnType {
    signedTransactions: SignedTransactionsType;
    signedTransactionsArray: [string, SignedTransactionsBodyType][];
    hasSignedTransactions: boolean;
}
export declare function useGetSignedTransactions(): useGetSignedTransactionsReturnType;
//# sourceMappingURL=useGetSignedTransactions.d.ts.map