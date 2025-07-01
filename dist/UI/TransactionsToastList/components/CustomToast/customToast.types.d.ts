import { ReactNode } from 'react';
import { ComponentIconToastType, MessageCustomToastType, MessageIconToastType, TransactionIconToastType } from '../../../../types/toasts.types';
import { WithClassnameType } from '../../../types';
import { ComponentTypeWithChildren } from '../types';
declare type SharedCustomToastPropsType = WithClassnameType & {
    onDelete: () => void;
    messageComponent?: ReactNode;
    CustomCloseButton?: ComponentTypeWithChildren<{
        onClick?: () => void;
    }>;
};
export declare type MessageCustomToastPropsType = SharedCustomToastPropsType & MessageCustomToastType;
export declare type MessageIconToastPropsType = SharedCustomToastPropsType & MessageIconToastType;
export declare type TransactionIconToastPropsType = SharedCustomToastPropsType & TransactionIconToastType;
export declare type ComponentIconToastPropsType = SharedCustomToastPropsType & ComponentIconToastType;
export declare type CustomToastPropsType = MessageCustomToastPropsType | MessageIconToastPropsType | ComponentIconToastPropsType | TransactionIconToastPropsType;
export {};
//# sourceMappingURL=customToast.types.d.ts.map