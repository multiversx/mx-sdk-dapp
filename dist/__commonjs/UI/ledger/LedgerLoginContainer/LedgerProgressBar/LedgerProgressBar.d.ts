/// <reference types="react" />
import { LedgerAccountType } from 'reduxStore/slices';
export interface LedgerProgressBarPropsType {
    error?: string;
    ledgerAccount: LedgerAccountType | null;
    ledgerProgressBarClassNames?: {
        ledgerProgressBarTrackClassName?: string;
        ledgerProgressBarThumbClassName?: string;
    };
    showAddressList: boolean;
    showProgressBar?: boolean;
}
export declare const LedgerProgressBar: (props: LedgerProgressBarPropsType) => JSX.Element;
//# sourceMappingURL=LedgerProgressBar.d.ts.map