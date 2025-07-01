import { InterpretedTransactionType, ServerTransactionType } from 'types/serverTransactions.types';
export interface GetInterpretedTransactionType {
    address: string;
    explorerAddress: string;
    transaction: ServerTransactionType;
}
export declare function getInterpretedTransaction({ transaction, address, explorerAddress }: GetInterpretedTransactionType): InterpretedTransactionType;
//# sourceMappingURL=getInterpretedTransaction.d.ts.map