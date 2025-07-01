import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { SignedTransactionType, TransactionBatchStatusesEnum, TransactionServerStatusesEnum } from 'types';
import { ProgressProps } from 'UI/Progress';
import { TransactionDetailsType } from 'UI/TransactionDetails';
import { ComponentTypeWithChildren } from '../types';
import { TransactionToastContentProps } from './components';
export interface TransactionToastDefaultProps {
    toastId: string;
    transactions?: SignedTransactionType[];
    status?: TransactionBatchStatusesEnum | TransactionServerStatusesEnum;
    classes?: Record<string, string>;
    lifetimeAfterSuccess?: number;
    endTimeProgress?: number;
    startTimestamp?: number;
    onDelete?: (toastId: string) => void;
}
export interface TransactionToastContentElementsProps {
    TransactionToastStatusIcon?: ComponentTypeWithChildren<FontAwesomeIconProps>;
    CustomCloseButton?: ComponentTypeWithChildren<{
        onClick?: () => void;
        className?: string;
    }>;
    TransactionDetails?: ComponentTypeWithChildren<TransactionDetailsType>;
}
export interface TransactionToastCustomizationProps {
    TransactionToastContentCustomElements?: TransactionToastContentElementsProps;
    TransactionToastContent?: ComponentTypeWithChildren<TransactionToastContentProps>;
    Progress?: ComponentTypeWithChildren<ProgressProps>;
}
//# sourceMappingURL=transactionToast.type.d.ts.map