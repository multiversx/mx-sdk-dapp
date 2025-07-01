import { InterpretedTransactionType, OperationType } from 'types';
export declare type OperationDetailsPropsType = {
    transaction: InterpretedTransactionType;
    filterBy?: {
        action?: OperationType['action'];
        sender?: OperationType['sender'];
        receiver?: OperationType['receiver'];
    };
};
export declare const getOperationsDetails: ({ transaction, filterBy }: OperationDetailsPropsType) => OperationType[];
//# sourceMappingURL=getOperationsDetails.d.ts.map