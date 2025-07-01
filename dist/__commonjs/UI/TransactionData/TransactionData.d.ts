import { ReactNode } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { WithClassnameType } from '../types';
export interface TransactionDataPropsType extends WithClassnameType {
    customCopyIcon?: IconProp;
    data: string;
    highlight?: string;
    innerTransactionDataClasses?: {
        transactionDataInputLabelClassName?: string;
        transactionDataInputValueClassName?: string;
    };
    isScCall?: boolean;
    label?: ReactNode;
    showCopyButton?: boolean;
    showDataDecode?: boolean;
    transactionIndex: number;
}
export declare const TransactionData: (props: TransactionDataPropsType) => JSX.Element;
//# sourceMappingURL=TransactionData.d.ts.map