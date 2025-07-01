import { ReactNode } from 'react';
import { WithClassnameType } from '../../../types';
export interface LedgerConnectPropsType extends WithClassnameType {
    onClick: () => void;
    disabled?: boolean;
    error: string;
    connectPageContent?: ReactNode;
    customContentComponent?: ReactNode;
    ledgerConnectClassNames?: {
        ledgerModalTitleClassName?: string;
        ledgerModalSubtitleClassName?: string;
        ledgerModalErrorClassName?: string;
        ledgerModalIconClassName?: string;
        ledgerModalButtonClassName?: string;
        ledgerModalFooterLinkClassName?: string;
        ledgerModalFooterClassName?: string;
        ledgerModalContentClassName?: string;
    };
}
export declare const LedgerConnect: (props: LedgerConnectPropsType) => JSX.Element;
//# sourceMappingURL=LedgerConnect.d.ts.map