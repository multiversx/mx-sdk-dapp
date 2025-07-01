import { InterpretedTransactionType } from 'types/serverTransactions.types';
export declare function getTransactionStatus(transaction: InterpretedTransactionType): {
    failed: boolean;
    success: boolean;
    invalid: boolean;
    pending: boolean | undefined;
};
//# sourceMappingURL=getTransactionStatus.d.ts.map