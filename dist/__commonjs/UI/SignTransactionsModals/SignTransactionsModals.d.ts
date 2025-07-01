/// <reference types="react" />
import { CustomConfirmScreensType, SignPropsType } from './types/signTransactionsModals.types';
export interface SignTransactionsModalsPropsType {
    className?: string;
    CustomConfirmScreens?: CustomConfirmScreensType;
    verifyReceiverScam?: SignPropsType['verifyReceiverScam'];
    GuardianScreen?: SignPropsType['GuardianScreen'];
}
export declare const SignTransactionsModals: ({ className, CustomConfirmScreens, GuardianScreen, verifyReceiverScam }: SignTransactionsModalsPropsType) => JSX.Element | null;
//# sourceMappingURL=SignTransactionsModals.d.ts.map