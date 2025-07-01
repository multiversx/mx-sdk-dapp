/// <reference types="react" />
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TransactionServerStatusesEnum } from 'types';
export interface TransactionDetailsBodyPropsType {
    isTimedOut?: boolean;
    iconSrc?: {
        icon: IconDefinition;
    } | null;
    className?: string;
    status?: TransactionServerStatusesEnum;
    hash: string;
}
export declare const TransactionDetailsBody: (props: TransactionDetailsBodyPropsType) => JSX.Element;
//# sourceMappingURL=TransactionDetailsBody.d.ts.map