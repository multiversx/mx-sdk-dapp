import { OperationType, TransactionOperationActionTypeEnum } from 'types/serverTransactions.types';
import { WithTransactionType } from '../../../UI/types';
export declare const internalTransactionActions: TransactionOperationActionTypeEnum[];
declare enum ButtonTextEnum {
    inOut = "Show in/out operations",
    fewer = "Show fewer operations",
    all = "Show all operations"
}
export interface OperationListType extends WithTransactionType {
    operations: OperationType[];
    listLength?: number;
}
export declare function getOperationList({ operations, transaction, isExpanded, listLength }: OperationListType & {
    isExpanded?: boolean;
}): {
    displayedOperations: OperationType[];
    toggleButtonText: ButtonTextEnum;
    showToggleButton: boolean;
};
export declare function useGetOperationList(props: OperationListType): {
    isExpanded: boolean;
    displayedOperations: OperationType[];
    showToggleButton: boolean;
    toggleButtonText: ButtonTextEnum;
    onToggleButtonClick: () => void;
};
export {};
//# sourceMappingURL=useGetOperationList.d.ts.map