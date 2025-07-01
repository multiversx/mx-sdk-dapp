import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TransactionBatchStatusesEnum, TransactionsDisplayInfoType, TransactionServerStatusesEnum } from 'types';
export interface ToastDataState {
    id: string;
    icon: IconDefinition;
    hasCloseButton: boolean;
    title: string;
    iconClassName: string;
    expires?: number | boolean;
}
interface GetToastsOptionsDataPropsType {
    address: string;
    classes?: Record<'success' | 'warning' | 'danger' | string, 'success' | 'warning' | 'danger' | string>;
    sender: string;
    status?: TransactionBatchStatusesEnum | TransactionServerStatusesEnum;
    toastId: string;
    transactionDisplayInfo: TransactionsDisplayInfoType;
}
export declare const getToastDataStateByStatus: ({ address, classes, sender, status, toastId, transactionDisplayInfo }: GetToastsOptionsDataPropsType) => {
    id: string;
    icon: IconDefinition;
    title: string;
    hasCloseButton: boolean;
    iconClassName: string;
};
export {};
//# sourceMappingURL=getToastDataStateByStatus.d.ts.map