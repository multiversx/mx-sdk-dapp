import { ReactNode } from 'react';
export interface LedgerLoadingPropsType {
    customSpinnerComponent?: ReactNode;
    customContentComponent?: ReactNode;
    ledgerLoadingClassNames?: {
        ledgerModalTitleClassName?: string;
        ledgerModalSubtitleClassName?: string;
        ledgerLoadingWrapper?: string;
        ledgerLoadingSpinner?: string;
    };
}
export declare const LedgerLoading: (props: LedgerLoadingPropsType) => JSX.Element;
//# sourceMappingURL=LedgerLoading.d.ts.map